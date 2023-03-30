<script lang="ts">
	import { onMount } from 'svelte';
	import { Offcanvas } from 'sveltestrap/src';

	let scrollPoints: NodeListOf<HTMLElement>;
	let scrollToPoint: Function;
	let labels: string[] = ['Home', 'About', 'Projects', 'Blog', 'Contact'];
	let open: boolean = false;
	const toggle = () => (open = !open);

	onMount(() => {
		scrollPoints = document.querySelectorAll('.scroll-point');
		scrollToPoint = (index: number) => scrollPoints[index].scrollIntoView(true);
	});
</script>

<header>
	<nav class="desktop-nav">
		<ul>
			{#each labels as label, index}
				<li>
					<button on:click={() => scrollToPoint(index)}>{label}</button>
				</li>
			{/each}
		</ul>
	</nav>
	<button class="mobile-menu-button" type="button" on:click={toggle}>
		<img src="/assets/images/bars-solid.svg" alt="menu icon" />
	</button>
	<Offcanvas class="mobile-menu" isOpen={open} {toggle} placement="end">
		<nav class="mobile-nav">
			<ul>
				{#each labels as label, index}
					<li>
						<button
							on:click={() => {
								scrollToPoint(index);
								toggle();
							}}>{label}</button
						>
					</li>
				{/each}
			</ul>
		</nav>
	</Offcanvas>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		height: var(--header-height);
		width: 100%;
		z-index: 10;
	}

	.desktop-nav {
		background-color: var(--background-color-translucent);
		backdrop-filter: blur(10px);
		height: 100%;
	}

	.desktop-nav ul {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		display: flex;
		flex-direction: row;
		justify-content: right;
		margin: 0 0 0 auto;
		padding: 0 var(--min-page-margin);
	}

	li {
		list-style-type: none;
	}

	.desktop-nav li {
		margin: 0 0 0 1rem;
		font-size: 1.2rem;
	}

	.desktop-nav button,
	.mobile-nav button {
		background-color: transparent;
		border: none;
	}

	.desktop-nav button:hover {
		text-decoration: underline;
	}

	.mobile-menu-button {
		position: fixed;
		display: none;
		top: 1rem;
		right: calc(var(--min-page-margin) * 0.25);
		width: calc(var(--min-page-margin) * 0.75);
		background-color: transparent;
		border: none;
		padding: 0;
		margin: 0;
	}

	.mobile-menu-button img {
		width: 100%;
		filter: var(--svg-filter-white);
	}

	.mobile-nav li {
		font-size: 4rem;
	}

	@media (max-width: 992px) {
		.desktop-nav {
			display: none;
		}

		.mobile-menu-button {
			display: block;
		}
	}
</style>
