<script lang="ts">
	import { onMount } from 'svelte';
	import Wave from './Wave.svelte';
	import TechLogo from './TechLogo.svelte';
	import { techData } from '../techData';

	type ImageToolsSingle = {
		src: string;
		h?: number;
		w?: number;
	};

	interface ImageToolsOutput {
		fallback: ImageToolsSingle;
		sources: {
			avif: ImageToolsSingle[];
			webp: ImageToolsSingle[];
		};
	}

	const getImageSources = (importedImage: ImageToolsOutput) => {
		return {
			avif: importedImage.sources.avif[0].src,
			webp: importedImage.sources.webp[0].src,
			png: importedImage.fallback.src
		};
	};

	import headshot from '/src/assets/images/will-braun-headshot-min.jpg?w=650&h=650&format=avif;webp;png&picture';
	import downArrow from '/src/assets/images/angles-down-solid.svg';
	import gridlock from '/src/assets/images/gridlock-image.png?w=776&h=1478&format=avif;webp;png&picture';
	import github from '/src/assets/images/github.svg';
	import copy from '/src/assets/images/copy-icon.svg';
	import check from '/src/assets/images/check-solid.svg';

	const headshotSources = getImageSources(headshot);
	const gridlockSources = getImageSources(gridlock);

	let scrollTo: Function;
	onMount(() => {
		scrollTo = (selector: string): void => document.querySelector(selector)?.scrollIntoView(true);
	});

	let showCheck: boolean = false;
	let copyEmail: Function;
	onMount(() => {
		copyEmail = (): void => {
			navigator.clipboard.writeText('williamhbraun1@gmail.com');
			showCheck = true;
		};
	});
</script>

<main class="scroll-point" on:scroll={() => console.log('hi')}>
	<section class="top">
		<div class="row align-items-center m-0 p-0">
			<div class="col-xs-12 col-lg-7 pb-3 title">
				<h1>Hi, I'm Will</h1>
				<p>Software engineer, problem-solver, creator</p>
			</div>
			<div class="col-xs-12 col-lg-5">
				<div class="img-box">
					<picture>
						<source srcset={headshotSources.avif} type="image/avif" />
						<source srcset={headshotSources.webp} type="image/webp" />
						<img class="headshot" src={headshotSources.png} alt="Headshot" loading="eager" />
					</picture>
				</div>
			</div>
		</div>
		<Wave />
		<div class="down-arrow-box">
			<button type="button" class="down-arrow" on:click={() => scrollTo('.about')}>
				<img
					class="col-xs-12"
					src={downArrow}
					alt="Down arrow to scroll to About"
					loading="eager"
				/>
			</button>
		</div>
	</section>

	<section class="scroll-point about">
		<h2>About</h2>
		<p>
			I'm passionate about making ideas come to life on the web. While working as a consultant, I
			learned firsthand the power of code and how it can be used to improve the lives of millions. I
			dabbled with JavaScript in my spare time and I was hooked, jumpstarting me on a life-changing
			journey to code professionally. Now, I am a software engineer at SIOS Technology Corp., where
			I work on high availability and disaster recovery solutions for cloud systems.
		</p>
		<h3>Skills and Technologies</h3>
		<div class="skills">
			{#each techData as data, index}
				<TechLogo {data} {index} />
			{/each}
		</div>
	</section>
	<section class="scroll-point projects">
		<h2>Projects</h2>
		<article class="project">
			<h3>Gridlock</h3>
			<div class="row gridlock-grid">
				<div class="col-xs-12 col-md-8 gridlock-info">
					<p>
						Gridlock is a 2-player strategy game that a friend showed me on a whiteboard, and I
						thought it would be fun to create a digital version. The goal is to connect 4 numbers in
						a row, using a factor of the number from your opponent's previous turn. I designed the
						app to fit any size screen, built it using React, and deployed it to Netlify.
					</p>
					<br />
					<p>
						Do you like a challenge? I am most proud of the "Computer - Hard" mode in Settings. It
						is an AI that I created to play against you, which was inspired by chess engines. It
						uses a minimax algorithm, alpha-beta pruning, and an evaluation function. See if you can
						beat it!
					</p>
					<div class="project-buttons">
						<a href="https://gridlock.willbraun.dev" target="_blank" rel="noopener noreferrer">
							<button class="button-primary" type="button">
								<p>Play Gridlock</p>
							</button>
						</a>
						<a
							href="https://github.com/willbraun/gridlock"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button class="button-primary github-button" type="button">
								<p>GitHub</p>
								<img src={github} alt="github icon" loading="lazy" />
							</button>
						</a>
					</div>
				</div>
				<div class="col-xs-12 col-md-4 gridlock-play">
					<a class="gridlock-link" href="https://gridlock.willbraun.dev" target="_blank">
						<picture>
							<source srcset={gridlockSources.avif} type="image/avif" />
							<source srcset={gridlockSources.webp} type="image/webp" />
							<img class="gridlock-img" src={gridlockSources.png} alt="Gridlock" loading="lazy" />
						</picture>
						<div class="overlay">Click to play</div>
					</a>
				</div>
			</div>
		</article>
		<article class="project">
			<h3>OpenSeat</h3>
			<p>
				When I moved to Greenville, SC, I was working remotely and found it tough to meet new
				people. I was inspired to create a solution to connect people based on their unique
				interests. With OpenSeat, you can create events to do any activity you'd like with a small
				group. You can also search for and sign up for events that others have posted. It is a full
				stack app that I built with React, Django, Google and Twilio APIs, and deployed to Heroku.
				This was my final project at Carolina Code School, and I've included a video demo of the app
				below.
			</p>
			<div class="video-wrapper" style="position: relative; padding-bottom: 62.5%; height: 0;">
				<iframe
					title="Open Seat Loom video demo"
					src="https://www.loom.com/embed/ec1cf09e45434ab29c6b323d3856634a"
					frameborder="0"
					allowfullscreen
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
					loading="lazy"
				/>
			</div>
			<div class="project-buttons">
				<a
					href="https://github.com/willbraun/openseat-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="button-primary github-button" type="button">
						<p>GitHub</p>
						<img src={github} alt="github icon" loading="lazy" />
					</button>
				</a>
			</div>
		</article>
		<article class="project">
			<h3>3D Dice Roll</h3>
			<p>
				With this app, you can roll two six-sided dice and watch them bounce around. I used
				SvelteKit, Three.js, Threlte, the Rapier Physics Engine, and deployed it to Netlify.
			</p>
			<div class="video-wrapper">
				<video width="100%" muted autoplay loop playsinline>
					<source src="3d-dice-roll.mp4" type="video/mp4" />
				</video>
			</div>
			<div class="project-buttons">
				<a href="https://dice.willbraun.dev" target="_blank" rel="noopener noreferrer">
					<button class="button-primary" type="button">
						<p>Roll Dice</p>
					</button>
				</a>
				<a
					href="https://github.com/willbraun/3d-dice-roll"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="button-primary github-button" type="button">
						<p>GitHub</p>
						<img src={github} alt="github icon" loading="lazy" />
					</button>
				</a>
			</div>
		</article>
	</section>
	<section class="scroll-point blog">
		<h2>Blog</h2>
		<p>
			I love software development because there is always more to learn, and I can share what I've
			learned to help others. I write articles about tech I am working with, personal projects,
			problems I have solved, and life as a developer. Check it out!
		</p>
		<a href="https://blog.willbraun.dev" target="_blank" rel="noopener noreferrer">
			<button class="button-primary" type="button">
				<p>Visit My Blog</p>
			</button>
		</a>
	</section>
	<section class="scroll-point contact">
		<h2>Contact</h2>
		<div class="contact-info">
			<p>Want to chat? Feel free to reach out!</p>
			<a href="mailto:williamhbraun1@gmail.com" target="_blank" rel="noopener noreferrer">
				<button class="button-primary" type="button">
					<p>Open Mail App</p>
				</button>
			</a>
			<div class="copy-email">
				<button class="copy-button button-secondary" type="button" on:click={() => copyEmail()}>
					<p>williamhbraun1@gmail.com</p>
					<img src={copy} alt="copy email" loading="lazy" />
				</button>
				<div class="copied {showCheck && 'show-check'}">
					<img src={check} alt="copied check mark" loading="lazy" />
				</div>
			</div>
		</div>
	</section>
	<button type="button" class="down-arrow up-arrow" on:click={() => scrollTo('.top')}>
		<img class="col-xs-12" src={downArrow} alt="up arrow scroll to top" loading="lazy" />
	</button>
</main>

<style>
	main {
		position: relative;
		top: 0;
		width: 100%;
		background-color: var(--background-color);
		overflow: hidden;
	}

	section:first-child {
		background: linear-gradient(
			0deg,
			rgba(255, 122, 237, 1) 0%,
			rgba(255, 220, 165, 1) 50%,
			var(--sky-blue) 100%
		);
		margin-bottom: 2rem;
	}

	section:not(:first-child) {
		width: 100%;
		max-width: 992px;
		padding: 0 var(--min-page-margin);
		margin: 0 auto 3rem;
		scroll-margin: var(--header-height);
	}

	section p {
		font-size: 1.5rem;
	}

	.title * {
		text-align: center;
		color: var(--background-color);
	}

	.title p {
		font-size: 1.5rem;
	}

	h1 {
		font-size: clamp(4rem, 15vw, 6rem);
	}

	h2 {
		font-size: 4rem;
		margin: 0 0 1rem;
	}

	h3 {
		font-size: 2rem;
	}

	h1,
	h2,
	h3 {
		font-family: 'Bakbak One', 'Georgia', 'sans-serif';
	}

	h2,
	h3,
	p {
		color: var(--accent-color);
	}

	.top {
		position: relative;
		height: 100vh;
	}

	.top > .row {
		position: absolute;
		top: 40%;
		transform: translateY(-40%);
		width: 100%;
	}

	.top > .row > div {
		position: relative;
	}

	.img-box {
		position: relative;
		width: 375px;
		height: 375px;
		margin: auto;
	}

	.img-box > picture > img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 0.8rem solid var(--background-color);
	}

	.down-arrow-box {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: var(--home-bottom-height);
		background-color: var(--background-color);
	}

	.down-arrow,
	.up-arrow {
		height: 3rem;
		width: 3rem;
		border: none;
		background-color: transparent;
	}

	.down-arrow {
		position: relative;
		margin: 0 auto;
		bottom: -2vh;
		left: 50%;
		transform: translateX(-50%);
	}

	.up-arrow {
		position: relative;
		margin: 0 0 3rem;
		transform: translateX(-50%) rotate(180deg);
	}

	.down-arrow img,
	.up-arrow img {
		width: 100%;
		filter: var(--svg-filter-accent);
		transition: 0.1s;
	}

	.down-arrow img:hover,
	.up-arrow img:hover {
		scale: 1.1;
	}

	.about h3 {
		margin-top: 1rem;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		/* enable below if one skill in last row */
		max-width: 700px;
		margin: auto;
	}

	.project {
		margin: 0 0 2rem;
	}

	.gridlock-play {
		position: relative;
		overflow: hidden;
		margin: 1rem auto;
		max-width: 350px;
	}

	.gridlock-img {
		width: 100%;
		border-radius: 0.75rem;
		transition: 0.1s;
	}

	.gridlock-play:hover img {
		filter: blur(3px) brightness(50%);
	}

	.project-buttons {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		margin-top: 2rem;
	}

	.overlay {
		width: 100%;
		height: 99%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		vertical-align: center;
		color: #fff;
		font-size: 2rem;
		font-weight: 600;
		border-radius: 0.75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		transition: 0.1s;
	}

	.gridlock-play:hover .overlay {
		opacity: 1;
	}

	.github-button img {
		width: 2rem;
		margin-left: 0.5rem;
	}

	.video-wrapper {
		margin: 2rem 0;
	}

	video {
		border-radius: 0.5rem;
	}

	.button-primary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--accent-color);
	}

	.button-primary p {
		color: #000;
		font-size: 1.4rem;
		font-weight: 600;
	}

	.button-secondary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--accent-color);
		background-color: transparent;
	}

	.button-primary,
	.button-secondary {
		padding: 0.5rem 0.6rem;
		border: 1px solid var(--accent-color);
		border-radius: 0.5rem;
		height: 3rem;
		transition: 0.1s;
	}

	.button-primary:hover,
	.button-secondary:hover {
		transform: scale(1.07);
	}

	.blog .button-primary {
		margin: 2rem auto 0;
	}

	.contact-info {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.contact-info > * {
		margin-bottom: 1rem;
	}

	.copy-email {
		position: relative;
	}

	.copy-button {
		width: 100%;
	}

	.copy-button img {
		width: 1.8rem;
		margin-left: 1rem;
		filter: var(--svg-filter-accent);
	}

	.copied {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: -3rem;
		transition: 0.1s;
	}

	.copied img {
		width: 2rem;
		filter: var(--svg-filter-accent);
	}

	.copied:not(.show-check) {
		opacity: 0;
	}

	.copied.show-check {
		opacity: 1;
	}

	@media (max-width: 576px) {
		.top > .row {
			position: absolute;
			top: 20%;
			transform: translateY(-20%);
			width: 100%;
		}

		section p {
			font-size: 1.3rem;
		}

		.img-box > picture > img {
			border-width: 0.5rem;
		}

		.img-box {
			height: 35vh;
			width: 35vh;
		}

		.up-arrow,
		.down-arrow {
			height: 15vw;
			width: 15vw;
		}

		.down-arrow {
			bottom: 0;
		}

		.down-arrow-box {
			height: var(--home-bottom-height-mobile);
			bottom: -10px;
		}

		.button-primary p,
		.button-secondary p {
			font-size: 1.2rem;
		}

		.button-primary:hover,
		.button-secondary:hover {
			transform: none;
		}

		.overlay {
			display: none;
		}

		.gridlock-play:hover .overlay {
			opacity: 0;
		}

		.gridlock-play:hover img {
			filter: none;
		}

		.gridlock-link {
			pointer-events: none;
		}

		.copy-email {
			transform: scale(0.9);
		}
	}

	@media (min-width: 576px) and (max-width: 992px) {
		.top > .row {
			top: 0;
			transform: translateY(0);
		}

		.img-box {
			height: 45vh;
			width: 45vh;
		}

		.down-arrow-box {
			height: var(--home-bottom-height);
			bottom: -10px;
		}

		.title {
			margin: 4vh 0 1rem;
		}
	}
</style>
