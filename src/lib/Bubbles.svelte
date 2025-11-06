<script lang="ts">
	import Matter from 'matter-js';
	import { onDestroy, onMount } from 'svelte';
	import { techData } from '../techData';
	import TechLogo from './TechLogo.svelte';

	let container: HTMLDivElement;
	let containerWidth = 0;
	let containerHeight = 600;

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

		const { Engine, Runner, Bodies, Composite, Events, Body } = Matter;

		const engine = Engine.create();
		const world = engine.world;
		engine.gravity.y = 0;

		// Bubble radius (matching TechLogo size)
		const radius = 40;

		// Create physics bodies for each bubble
		const bodies = bubbles.map((bubble, i) => {
			// Distribute bubbles across the width with some randomness
			const x = (containerWidth / (techData.length + 1)) * (i + 1) + (Math.random() - 0.5) * 50;
			const y = Math.random() * 200 + 50; // Random height at top

			bubble.x = x;
			bubble.y = y;

			return Bodies.circle(x, y, radius, {
				restitution: 0.8, // Bounciness
				friction: 0.01,
				density: 0.001,
				frictionAir: 0.01
			});
		});

		// Create walls
		const wallThickness = 50;
		const walls = [
			// Ground
			Bodies.rectangle(
				containerWidth / 2,
				containerHeight + wallThickness / 2,
				containerWidth,
				wallThickness,
				{ isStatic: true }
			),
			// Left wall
			Bodies.rectangle(-wallThickness / 2, containerHeight / 2, wallThickness, containerHeight, {
				isStatic: true
			}),
			// Right wall
			Bodies.rectangle(
				containerWidth + wallThickness / 2,
				containerHeight / 2,
				wallThickness,
				containerHeight,
				{ isStatic: true }
			),
			// Ceiling
			Bodies.rectangle(containerWidth / 2, -wallThickness / 2, containerWidth, wallThickness, {
				isStatic: true
			})
		];

		Composite.add(world, [...bodies, ...walls]);

		const runner = Runner.create();
		Runner.run(runner, engine);

		// Update Svelte component positions every frame
		Events.on(runner, 'afterUpdate', () => {
			bodies.forEach((body, i) => {
				bubbles[i].x = body.position.x;
				bubbles[i].y = body.position.y;
				bubbles[i].rotation = body.angle;
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
			Runner.stop(runner);
			Matter.World.clear(world, false);
			Matter.Engine.clear(engine);
		});
	});
</script>

<div class="bubbles-container" bind:this={container}>
	{#each bubbles as bubble (bubble.index)}
		<div
			class="bubble"
			style="transform: translateX({bubble.x}px) translateY({bubble.y}px) rotate({bubble.rotation}rad);"
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
	}

	.bubble {
		position: absolute;
		pointer-events: none;
	}
</style>
