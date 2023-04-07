<script lang="ts">
	import { onMount } from 'svelte';
	import { Offcanvas } from 'sveltestrap/src';
	import menu from '/src/assets/images/bars-solid.svg';

	let scrollY: number;
	let downArrowY: number;
	let underwaterClass: string = '';
	onMount(() => {
		const mainTop = document.querySelector('main')!.getBoundingClientRect().top;
		const downArrowTop = document.querySelector('.down-arrow-box')!.getBoundingClientRect().top;
		downArrowY = downArrowTop - mainTop;
	});
	$: underwaterClass = scrollY > downArrowY ? 'underwater' : '';

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

<svelte:window bind:scrollY />

<header class={underwaterClass}>
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
		<img src={menu} alt="menu icon" loading="eager" />
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
		width: 100vw;
		z-index: 10;
	}

	.desktop-nav {
		background-color: transparent;
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

	.desktop-nav button {
		color: var(--background-color);
		transition: 0.1s;
	}

	header.underwater .desktop-nav {
		background-color: var(--background-color-translucent);
	}

	header.underwater .desktop-nav button {
		color: var(--accent-color);
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
		height: 100%;
		width: 100%;
		filter: var(--background-color);
		transition: 0.1s;
	}

	header.underwater .mobile-menu-button img {
		filter: var(--svg-filter-accent);
	}

	.mobile-menu,
	.mobile-nav {
		overflow-x: hidden;
	}

	.mobile-nav ul {
		padding: 0;
	}

	.mobile-nav li {
		font-size: 3rem;
		font-family: 'Bakbak One';
	}

	.mobile-nav button {
		color: var(--accent-color);
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
