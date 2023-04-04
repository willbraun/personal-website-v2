<script lang="ts">
	import { onMount } from 'svelte';
	import Wave from './Wave.svelte';
	import TechLogo from './TechLogo.svelte';
	import { techData } from '../techData';

	import headshotAvif from '/src/assets/images/will-braun-headshot-min.jpg?w=500&avif';
	import headshotWebp from '/src/assets/images/will-braun-headshot-min.jpg?w=500&webp';
	import headshot from '/src/assets/images/will-braun-headshot-min.jpg?w=500';

	import downArrowAvif from '/src/assets/images/angles-down-solid.svg?avif';
	import downArrowWebp from '/src/assets/images/angles-down-solid.svg?webp';
	import downArrow from '/src/assets/images/angles-down-solid.svg';

	import gridlockAvif from '/src/assets/images/gridlock-image.png?avif';
	import gridlockWebp from '/src/assets/images/gridlock-image.png?webp';
	import gridlock from '/src/assets/images/gridlock-image.png?w=350';

	let scrollTo: Function;
	onMount(() => {
		scrollTo = (selector: string): void => {
			const element = document.querySelector(selector);
			!!element && element.scrollIntoView(true);
		};
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
						<source srcset={headshotAvif} type="image/avif" />
						<source srcset={headshotWebp} type="image/webp" />
						<img class="headshot" src={headshot} alt="Headshot" />
					</picture>
				</div>
			</div>
		</div>
		<Wave />
		<div class="down-arrow-box">
			<button type="button" class="down-arrow" on:click={() => scrollTo('.about')}>
				<picture>
					<source srcset={downArrowAvif} type="image/avif" />
					<source srcset={downArrowWebp} type="image/webp" />
					<img class="col-xs-12" src={downArrow} alt="Down arrow to scroll to About" />
				</picture>
			</button>
		</div>
	</section>

	<section class="scroll-point about">
		<h2>About</h2>
		<p>
			I'm passionate about making ideas come to life on the web. While working as a software
			consultant, I learned firsthand the power of code and how it could be used to improve lives of
			millions. I dabbled with JavaScript in my spare time and I was hooked, which jumpstarted me on
			a life-changing journey to code professionally. Now, I am a software engineer at SIOS
			Technology Corp., where I work on high availability and disaster recovery solutions for cloud
			systems.
		</p>
		<h3>Skills</h3>
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
						a row, using a factor of the number from your opponent's previous turn. It is a
						serverless app I built with React and deployed to Github Pages, so it can be played
						offline once loaded. I designed it for mobile, but it will work on any size screen.
					</p>
					<br />
					<p>
						Do you like a challenge? I am most proud of the "Computer - Hard" mode in Settings. It
						is an AI that I created to play against you, which was inspired by chess engines. It
						uses a minimax algorithm, alpha-beta pruning, and an evaluation function. See if you can
						beat it!
					</p>
					<div class="project-buttons">
						<a
							href="https://willbraun.github.io/gridlock/"
							target="_blank"
							rel="noopener noreferrer"
						>
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
								<img src="/assets/images/github.svg" alt="github icon" />
							</button>
						</a>
					</div>
				</div>
				<div class="col-xs-12 col-md-4 gridlock-play">
					<a class="gridlock-link" href="https://willbraun.github.io/gridlock/" target="_blank">
						<picture>
							<source srcset={gridlockAvif} type="image/avif" />
							<source srcset={gridlockWebp} type="image/webp" />
							<img class="gridlock-img" src={gridlock} alt="Gridlock" />
						</picture>
						<div class="overlay">Click to play</div>
					</a>
				</div>
			</div>
		</article>
		<article class="project">
			<h3>OpenSeat</h3>
			<p>
				When I moved to Greenville, SC, I was working remotely and it was tough to meet new people.
				I was inspired to create a solution to connect people based on their unique interests. With
				OpenSeat, you can create events to do any activity you'd like with a small group. You can
				also search for and sign up for events that others have posted. It is a full stack app that
				I built using React, Django, Google and Twilio APIs, and deployed to Heroku. This was my
				final project at Carolina Code School, and I've included a video demo of the app below.
			</p>
			<div class="project-buttons">
				<a
					href="https://github.com/willbraun/openseat-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="button-primary github-button" type="button">
						<p>GitHub</p>
						<img src="/assets/images/github.svg" alt="github icon" />
					</button>
				</a>
			</div>
			<div class="openseat-demo" style="position: relative; padding-bottom: 62.5%; height: 0;">
				<iframe
					title="Open Seat Loom video demo"
					src="https://www.loom.com/embed/ec1cf09e45434ab29c6b323d3856634a"
					frameborder="0"
					allowfullscreen
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
				/>
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
					<img src="/assets/images/copy-icon.svg" alt="copy email" />
				</button>
				<div class="copied {showCheck && 'show-check'}">
					<img src="/assets/images/check-solid.svg" alt="copied check mark" />
				</div>
			</div>
		</div>
	</section>
	<button type="button" class="down-arrow up-arrow" on:click={() => scrollTo('.top')}>
		<img
			class="col-xs-12"
			src="/assets/images/angles-down-solid.svg"
			alt="up arrow scroll to top"
		/>
	</button>
</main>

<style>
	main {
		position: relative;
		top: 0;
		width: 100%;
		background-color: var(--background-color);
		padding: 0 0 6rem;
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
		font-size: clamp(3rem, 15vw, 6rem);
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
		aspect-ratio: 1 / 1;
		max-height: 50vh;
		margin: auto;
	}

	.img-box img {
		height: 100%;
		border-radius: 50%;
		border: 0.8rem solid var(--background-color);
	}

	.down-arrow-box {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 10%;
		background-color: var(--background-color);
	}

	.down-arrow,
	.up-arrow {
		width: 3rem;
		border: none;
		background-color: transparent;
	}

	.down-arrow {
		position: absolute;
		bottom: 15px;
		left: 50%;
		transform: translateX(-50%);
	}

	.up-arrow {
		position: absolute;
		bottom: 45px;
		left: 50%;
		transform: translateX(-50%) rotate(180deg);
	}

	.down-arrow img,
	.up-arrow img {
		width: 100%;
		filter: var(--svg-filter-accent);
	}

	.about p {
		margin: 1rem 0 2rem;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.project {
		margin: 1rem 1rem;
	}

	.gridlock-info {
		margin: 1rem 0;
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

	.openseat-demo {
		margin: 2rem 0;
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

	@media (max-width: 768px) {
		section p {
			font-size: 1.3rem;
		}

		.button-primary p,
		.button-secondary p {
			font-size: 1.2rem;
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
	}

	@media (max-width: 992px) {
		.top > .row {
			top: 0;
			transform: translateY(0);
		}

		.title {
			margin: 4vh 0 1rem;
		}
	}
</style>
