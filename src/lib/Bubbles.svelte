<script lang="ts">
	import Matter from 'matter-js';
	import { onDestroy, onMount } from 'svelte';
	import { techData } from '../techData';
	import TechLogo from './TechLogo.svelte';

	let container: HTMLDivElement;
	let canvas: HTMLCanvasElement;
	let containerWidth = 0;
	let containerHeight = 600;

	// Toggle for debug visualization
	let showDebug = $state(false);

	// Store positions for each bubble
	let bubbles = $state(
		techData.map((data, index) => ({
			data,
			index,
			x: 0,
			y: 0,
			rotation: 0
		}))
	);

	onMount(() => {
		// Get container width from actual element
		containerWidth = container.clientWidth;

		const { Engine, Runner, Bodies, Composite, Events, Body, Render } = Matter;

		const engine = Engine.create();
		const world = engine.world;
		engine.gravity.y = 0; // Restore gravity

		// Bubble radius (matching TechLogo size)
		const radius = containerWidth < 576 ? 48 : 64;

		// Create physics bodies for each bubble
		const bodies = bubbles.map((bubble, i) => {
			// Distribute bubbles across the width with some randomness
			// Ensure they stay within bounds (radius padding on each side)
			const minX = radius + 10;
			const maxX = containerWidth - radius - 10;
			const spacing = (maxX - minX) / (techData.length - 1);
			const baseX = minX + spacing * i;
			const randomOffset = (Math.random() - 0.5) * Math.min(30, spacing * 0.5);
			const x = Math.max(minX, Math.min(maxX, baseX + randomOffset));

			// Random height at top, but ensure it's within bounds
			const minY = radius + 10;
			const maxY = 250;
			const y = Math.random() * (maxY - minY) + minY;

			bubble.x = x;
			bubble.y = y;

			return Bodies.circle(x, y, radius, {
				restitution: 1, // Bounciness
				density: 0.5,
				friction: 0,
				frictionAir: 0,
				frictionStatic: 0
			});
		});

		// Create walls
		const wallThickness = 1;
		const walls = [
			// Ground - position at the bottom edge minus bubble radius
			Bodies.rectangle(containerWidth / 2, containerHeight, containerWidth, wallThickness, {
				isStatic: true,
				restitution: 1
			}),
			// Left wall
			Bodies.rectangle(0, containerHeight / 2, wallThickness, containerHeight, {
				isStatic: true,
				restitution: 1
			}),
			// Right wall
			Bodies.rectangle(containerWidth, containerHeight / 2, wallThickness, containerHeight, {
				isStatic: true,
				restitution: 1
			}),
			// Ceiling
			Bodies.rectangle(containerWidth / 2, 0, containerWidth, wallThickness, {
				isStatic: true,
				restitution: 1
			})
		];

		Composite.add(world, [...walls, ...bodies]);

		// Create a mouse body that pushes bubbles
		const mouseRadius = 30;
		let mouseBody = Bodies.circle(-100, -100, mouseRadius, {
			restitution: 1.1
		});
		Composite.add(world, mouseBody);

		// Track mouse position and update mouse body
		const handleMouseMove = (event: MouseEvent) => {
			const rect = container.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			Body.setPosition(mouseBody, { x, y });
		};

		const handleMouseLeave = () => {
			// Move mouse body off-screen when mouse leaves
			Body.setPosition(mouseBody, { x: -100, y: -100 });
		};

		// Handle touch events for mobile
		let touchStartPos = { x: 0, y: 0 };
		const moveThreshold = 10; // pixels

		const handleTouchStart = (event: TouchEvent) => {
			const rect = container.getBoundingClientRect();
			const touch = event.touches[0];
			touchStartPos.x = touch.clientX - rect.left;
			touchStartPos.y = touch.clientY - rect.top;
		};

		const handleTouchMove = (event: TouchEvent) => {
			const rect = container.getBoundingClientRect();
			const touch = event.touches[0];
			const x = touch.clientX - rect.left;
			const y = touch.clientY - rect.top;

			// Only prevent scrolling if moving horizontally (interacting with bubbles)
			// Allow vertical scrolling
			const deltaX = Math.abs(x - touchStartPos.x);
			const deltaY = Math.abs(y - touchStartPos.y);

			if (deltaX > deltaY && deltaX > moveThreshold) {
				// Horizontal movement - interact with bubbles and prevent scroll
				event.preventDefault();
				Body.setPosition(mouseBody, { x, y });
			} else if (deltaX > moveThreshold || deltaY > moveThreshold) {
				// Any significant movement - interact with bubbles
				Body.setPosition(mouseBody, { x, y });
			}
		};

		const handleTouchEnd = () => {
			// Move mouse body off-screen when touch ends
			Body.setPosition(mouseBody, { x: -100, y: -100 });
		};

		container.addEventListener('mousemove', handleMouseMove);
		container.addEventListener('mouseleave', handleMouseLeave);
		container.addEventListener('touchstart', handleTouchStart);
		container.addEventListener('touchmove', handleTouchMove, { passive: false });
		container.addEventListener('touchend', handleTouchEnd);
		container.addEventListener('touchcancel', handleTouchEnd);

		// Add debug renderer
		const render = Render.create({
			canvas: canvas,
			engine: engine,
			options: {
				width: containerWidth,
				height: containerHeight,
				wireframes: true,
				background: 'transparent'
			}
		});

		if (showDebug) {
			Render.run(render);
		}

		const runner = Runner.create();
		Runner.run(runner, engine);

		// Update Svelte component positions every frame
		Events.on(runner, 'afterUpdate', () => {
			bodies.forEach((body, i) => {
				bubbles[i].x = body.position.x;
				bubbles[i].y = body.position.y;
				bubbles[i].rotation = body.angle;

				// Keep bubbles moving with random gentle nudges when they slow down
				const speed = Math.sqrt(body.velocity.x ** 2 + body.velocity.y ** 2);
				const minSpeed = 0.5;

				if (speed < minSpeed) {
					// Apply a small random force to keep it moving
					const forceStrength = 2;
					const angle = Math.random() * Math.PI * 2;
					Body.applyForce(body, body.position, {
						x: Math.cos(angle) * forceStrength,
						y: Math.sin(angle) * forceStrength
					});
				}
			});
		});

		// Add some initial random velocities for fun
		bodies.forEach((body) => {
			Body.setVelocity(body, {
				x: (Math.random() - 0.5) * 2,
				y: (Math.random() - 0.5) * 2
			});
		});

		onDestroy(() => {
			container.removeEventListener('mousemove', handleMouseMove);
			container.removeEventListener('mouseleave', handleMouseLeave);
			container.removeEventListener('touchstart', handleTouchStart);
			container.removeEventListener('touchmove', handleTouchMove);
			container.removeEventListener('touchend', handleTouchEnd);
			container.removeEventListener('touchcancel', handleTouchEnd);
			Runner.stop(runner);
			Render.stop(render);
			Matter.World.clear(world, false);
			Matter.Engine.clear(engine);
		});
	});
</script>

<div class="bubbles-container" bind:this={container}>
	<canvas bind:this={canvas} class:debug-visible={showDebug}></canvas>
	{#each bubbles as bubble (bubble.index)}
		<div
			class="bubble"
			style="left: {bubble.x}px; top: {bubble.y}px; transform: translate(-50%, -50%) rotate({bubble.rotation}rad);"
		>
			<TechLogo data={bubble.data} index={bubble.index} />
		</div>
	{/each}
</div>

<style>
	.bubbles-container {
		width: 100%;
		height: 600px;
		position: relative;
		overflow: hidden;
		background: transparent;
		cursor: pointer;
		/* Allow vertical scrolling but handle horizontal gestures for bubble interaction */
		touch-action: pan-y;
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		pointer-events: none;
	}

	canvas.debug-visible {
		opacity: 0.7;
		z-index: 1000;
	}

	.bubble {
		position: absolute;
		pointer-events: none;
	}
</style>
