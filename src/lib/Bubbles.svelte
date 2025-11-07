<script lang="ts">
	import { browser } from '$app/environment';
	import Matter from 'matter-js';
	import { onDestroy, onMount } from 'svelte';
	import { techData } from '../techData';
	import TechLogoBubble from './TechLogoBubble.svelte';

	let container: HTMLDivElement;
	let canvas: HTMLCanvasElement;
	let containerWidth = 0;
	let containerHeight = 650;

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
		engine.gravity.y = 0;

		// Reduce iterations on mobile for better performance
		const isMobile = containerWidth < 768;
		engine.positionIterations = isMobile ? 6 : 10;
		engine.velocityIterations = isMobile ? 6 : 10;

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
			const maxY = containerHeight - radius - 10;
			const y = Math.random() * (maxY - minY) + minY;

			bubble.x = x;
			bubble.y = y;

			return Bodies.circle(x, y, radius, {
				restitution: isMobile ? 0.8 : 0.9, // Reduced bounciness to prevent perfect bounces
				density: isMobile ? 0.1 : 0.01, // Lower density for lighter bubbles
				friction: 0,
				frictionAir: 0, // Small air resistance to dampen energy
				frictionStatic: 0,
				inertia: Infinity // Prevent rotation
			});
		});

		// Create walls
		const wallThickness = 1;
		const walls = [
			// Ground - position at the bottom edge minus bubble radius
			Bodies.rectangle(containerWidth / 2, containerHeight, containerWidth, wallThickness, {
				isStatic: true,
				restitution: 0.8
			}),
			// Left wall
			Bodies.rectangle(0, containerHeight / 2, wallThickness, containerHeight, {
				isStatic: true,
				restitution: 0.8
			}),
			// Right wall
			Bodies.rectangle(containerWidth, containerHeight / 2, wallThickness, containerHeight, {
				isStatic: true,
				restitution: 0.8
			}),
			// Ceiling
			Bodies.rectangle(containerWidth / 2, 0, containerWidth, wallThickness, {
				isStatic: true,
				restitution: 0.8
			})
		];

		Composite.add(world, [...walls, ...bodies]);

		// Create a mouse body that pushes bubbles
		const mouseRadius = 30;
		let mouseBody = Bodies.circle(-100, -100, mouseRadius, {
			isStatic: true,
			restitution: 0.8
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

		container.addEventListener('mousemove', handleMouseMove);
		container.addEventListener('mouseleave', handleMouseLeave);

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

		// Throttle updates on mobile for better performance
		let frameCount = 0;
		const updateInterval = isMobile ? 2 : 1; // Update every 2nd frame on mobile

		// Update Svelte component positions every frame
		Events.on(runner, 'afterUpdate', () => {
			frameCount++;

			// Skip updates on mobile to reduce DOM manipulation
			if (frameCount % updateInterval !== 0) {
				return;
			}

			bodies.forEach((body, i) => {
				bubbles[i].x = body.position.x;
				bubbles[i].y = body.position.y;
				// Don't update rotation - keep bubbles upright

				// Keep bubbles moving with gentle nudges in their current direction
				// Only check every few frames to reduce calculations
				if (frameCount % 10 === 0) {
					const speed = Math.sqrt(body.velocity.x ** 2 + body.velocity.y ** 2);
					const minSpeed = isMobile ? 0.2 : 0.5;

					if (speed < minSpeed) {
						// Apply force in the direction the bubble is already moving
						// If speed is very close to 0, add a small random component
						const forceStrength = isMobile ? 0.15 : 0.3;

						let forceX, forceY;
						if (speed > 0.01) {
							// Normalize velocity and apply force in that direction
							const normX = body.velocity.x / speed;
							const normY = body.velocity.y / speed;
							forceX = normX * forceStrength;
							forceY = normY * forceStrength;
						} else {
							// If nearly stationary, apply a small random force
							const angle = Math.random() * Math.PI * 2;
							forceX = Math.cos(angle) * forceStrength;
							forceY = Math.sin(angle) * forceStrength;
						}

						Body.applyForce(body, body.position, { x: forceX, y: forceY });
					}
				}
			});
		});

		onDestroy(() => {
			container.removeEventListener('mousemove', handleMouseMove);
			container.removeEventListener('mouseleave', handleMouseLeave);
			Runner.stop(runner);
			Render.stop(render);
			Matter.World.clear(world, false);
			Matter.Engine.clear(engine);
		});
	});
</script>

<div class="bubbles-container" bind:this={container} style="height: {containerHeight}px;">
	<canvas bind:this={canvas} class:debug-visible={showDebug}></canvas>
	{#if browser}
		{#each bubbles as bubble (bubble.index)}
			<div
				class="bubble"
				style="left: {bubble.x}px; top: {bubble.y}px; transform: translate(-50%, -50%);"
			>
				<TechLogoBubble data={bubble.data} />
			</div>
		{/each}
	{/if}
</div>

<style>
	.bubbles-container {
		width: 100%;
		position: relative;
		overflow: hidden;
		background: transparent;
		cursor: pointer;
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
		/* Use GPU acceleration for better performance */
		will-change: transform;
		transform: translate3d(0, 0, 0);
	}
</style>
