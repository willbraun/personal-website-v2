<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Bubbles from './Bubbles.svelte';
	import Wave from './Wave.svelte';

	const headshot = '/images/headshot.jpg';
	const unison = '/images/unison.png';
	const linkedInMessagePreview = '/images/linkedin-message-preview.jpg';
	const racquetRivals = '/images/racquet-rivals-image3.png';
	const gridlock = '/images/gridlock-image.png';
	const downArrow = '/images/angles-down-solid.svg';
	const github = '/images/github.svg';
	const externalLink = '/images/arrow-up-right-from-square-solid.svg';

	let scrollTo = $state<((selector: string) => void) | undefined>();
	onMount(() => {
		scrollTo = (selector: string): void => document.querySelector(selector)?.scrollIntoView(true);
	});

	const formEndpoint = 'https://formspree.io/f/xoeddryy';
	let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let fieldErrors = $state<Record<string, string>>({});
	let formError = $state('');

	const handleSubmit = async (event: SubmitEvent): Promise<void> => {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		formStatus = 'submitting';
		fieldErrors = {};
		formError = '';

		try {
			const response = await fetch(formEndpoint, {
				method: 'POST',
				body: new FormData(form),
				headers: { Accept: 'application/json' }
			});

			if (response.ok) {
				form.reset();
				formStatus = 'success';
				return;
			}

			const data = await response.json().catch(() => ({}));
			const errors: { field?: string; message: string }[] = data.errors ?? [];
			for (const error of errors) {
				if (error.field) {
					fieldErrors[error.field] = error.message;
				} else {
					formError = error.message;
				}
			}
			if (!errors.length) formError = 'Something went wrong. Please try again.';
			formStatus = 'error';
		} catch {
			formError = 'Could not send your message. Please check your connection and try again.';
			formStatus = 'error';
		}
	};
</script>

<main class="scroll-point" onscroll={() => console.log('hi')}>
	<section class="top">
		<div class="row align-items-center m-0 p-0">
			<div class="col-xs-12 col-lg-7 pb-3 title">
				<h1>Hi, I'm Will</h1>
				<p>Software engineer, problem-solver, creator</p>
			</div>
			<div class="col-xs-12 col-lg-5">
				<div class="img-box">
					<img class="headshot" src={headshot} alt="Headshot" loading="eager" />
				</div>
			</div>
		</div>
		<Wave />
		<div class="down-arrow-box">
			<button type="button" class="down-arrow" onclick={() => scrollTo?.('.about')}>
				<img
					class="col-xs-12"
					src={downArrow}
					alt="Down arrow to scroll to About"
					loading="eager"
				/>
			</button>
		</div>
	</section>
	<Bubbles />
	<section class="scroll-point about">
		<h2>About</h2>
		<p>
			I'm passionate about making ideas come to life on the web. As a senior software engineer with
			experience in product management, consulting, and chemical engineering, I have a wide range of
			tools in my toolbox and bring a unique perspective to every project. I strive to build robust
			and intuitive solutions across the tech stack.
		</p>
		<p>
			I also build web apps in my spare time. Have an idea? Tired of vibe coding? Let's <button
				onclick={() => scrollTo?.('.contact')}
				class="link">chat!</button
			>
		</p>
	</section>

	<section class="scroll-point projects">
		<h2>Projects</h2>
		<article class="project">
			<h3>Unison</h3>
			<p>
				Unison is an online community where women can share stories and discuss health and wellness
				in a safe, inclusive space. Members can create posts, comment, reply, like, search, and
				report content to keep the conversations supportive. I designed and developed the platform
				as a freelance project for a friend who saw the need for this kind of community, taking the
				idea from vision to launch. The frontend is built with Next.js and hosted on Vercel, and the
				backend is built with Supabase.
			</p>
			<img class="full-width-img" src={unison} alt="Unison" loading="lazy" />
			<div class="project-buttons">
				<a href="https://unisoncommunity.com" target="_blank" rel="noopener noreferrer">
					<button class="button-primary" type="button">
						<p>unisoncommunity.com</p>
						<img src={externalLink} alt="external link icon" loading="lazy" />
					</button>
				</a>
			</div>
		</article>
		<article class="project">
			<h3>LinkedIn Message Preview</h3>
			<p>
				Want to read LinkedIn messages without marking them as read? This Chrome extension lets you
				preview messages simply by hovering over them. It's available for free on the Chrome Web
				Store and has over 200 weekly users with a 5-star rating.
			</p>
			<img
				class="full-width-img"
				src={linkedInMessagePreview}
				alt="LinkedIn Message Preview"
				loading="lazy"
			/>
			<div class="project-buttons">
				<a
					href="https://chromewebstore.google.com/detail/linkedin-message-preview/ldlcapdmaddcmhnmelfehiklgclgknhk?hl=en"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button class="button-primary" type="button">
						<p>Chrome Web Store</p>
						<img src={externalLink} alt="external link icon" loading="lazy" />
					</button>
				</a>
				<a
					href="https://github.com/willbraun/linkedin-message-preview"
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
			<h3>Racquet Rivals</h3>
			<p>
				My wife and I used to create brackets by hand for the last 16 players of the four major
				tennis tournaments. We had so much fun I made it into a web app, like March Madness. Sign
				up, add your predictions during a major tournament, and you'll be awarded points by round
				for correct choices. You can compare scores with your friends along the way. The frontend is
				built with SvelteKit hosted on Netlify, and the backend is Pocketbase hosted on a Digital
				Ocean Linux Droplet.
			</p>
			<img class="full-width-img" src={racquetRivals} alt="Racquet Rivals" loading="lazy" />
			<div class="project-buttons">
				<a href="https://racquetrivals.com" target="_blank" rel="noopener noreferrer">
					<button class="button-primary" type="button">
						<p>racquetrivals.com</p>
						<img src={externalLink} alt="external link icon" loading="lazy" />
					</button>
				</a>
				<a
					href="https://github.com/willbraun/racquet-rivals"
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
				></iframe>
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
			<h3>Gridlock</h3>
			<div class="row gridlock-grid">
				<div class="col-xs-12 col-md-8 gridlock-info">
					<p>
						Gridlock is a 2-player strategy game that a friend showed me on a whiteboard, and I
						thought it would be fun to create a digital version. The goal is to connect 4 numbers in
						a row, using a factor of the number from your opponent's previous turn. I designed the
						app to be mobile-friendly, built it using React, and deployed it to Netlify.
					</p>
					<br />
					<p>
						Do you like a challenge? The "Computer - Hard" mode in the settings is an AI inspired by
						chess engines that I created to play against you. It uses a DFS minimax algorithm,
						alpha-beta pruning, and an evaluation function. See if you can beat it!
					</p>
					<div class="project-buttons">
						<a href="https://gridlock.willbraun.dev" target="_blank" rel="noopener noreferrer">
							<button class="button-primary" type="button">
								<p>Play Gridlock</p>
								<img src={externalLink} alt="external link icon" loading="lazy" />
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
						<img class="gridlock-img" src={gridlock} alt="Gridlock" loading="lazy" />
						<div class="overlay">Click to play</div>
					</a>
				</div>
			</div>
		</article>
		<article class="project">
			<h3>3D Dice Roll</h3>
			<p>
				Roll two six-sided dice and watch them bounce around. I used SvelteKit, Three.js, Threlte,
				the Rapier Physics Engine, and deployed it to Netlify.
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
						<img src={externalLink} alt="external link icon" loading="lazy" />
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
			I write articles about tech I am working with, personal projects, problems I have solved, and
			life as a developer. Check it out!
		</p>
		<a href="https://blog.willbraun.dev" target="_blank" rel="noopener noreferrer">
			<button class="button-primary" type="button">
				<p>Visit My Blog</p>
				<img src={externalLink} alt="external link icon" loading="lazy" />
			</button>
		</a>
	</section>
	<section class="scroll-point contact">
		<h2>Contact</h2>
		<div class="contact-info">
			<h3>Have an idea for something new?</h3>
			<p>I can help bring it to life from concept to implementation.</p>
			{#if formStatus === 'success'}
				<p class="form-success" role="status" in:fade={{ duration: 300, delay: 300 }}>
					Thanks for reaching out! I'll get back to you soon.
				</p>
			{:else}
				<form
					class="contact-form"
					action={formEndpoint}
					method="POST"
					onsubmit={handleSubmit}
					out:fade={{ duration: 300 }}
				>
					<label for="contact-email">Your email</label>
					<input
						id="contact-email"
						type="email"
						name="email"
						required
						aria-invalid={fieldErrors.email ? 'true' : undefined}
					/>
					{#if fieldErrors.email}<span class="form-error">{fieldErrors.email}</span>{/if}

					<label for="contact-message">Message</label>
					<textarea
						id="contact-message"
						name="message"
						rows="5"
						required
						aria-invalid={fieldErrors.message ? 'true' : undefined}
					></textarea>
					{#if fieldErrors.message}<span class="form-error">{fieldErrors.message}</span>{/if}

					<input
						class="honeypot"
						type="text"
						name="_gotcha"
						tabindex="-1"
						autocomplete="off"
						aria-hidden="true"
					/>

					{#if formError}<p class="form-error" role="alert">{formError}</p>{/if}

					<button class="button-primary" type="submit" disabled={formStatus === 'submitting'}>
						<p>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</p>
					</button>
				</form>
			{/if}
		</div>
	</section>
	<button type="button" class="down-arrow up-arrow" onclick={() => scrollTo?.('.top')}>
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

	.headshot {
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

	.about :not(h2) {
		padding-bottom: 1rem;
	}

	.project {
		margin: 0 0 4rem;
	}

	.full-width-img {
		width: 100%;
		border-radius: 0.75rem;
		margin-top: 2rem;
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
		flex-wrap: wrap;
		gap: 1rem;
		width: 100%;
		margin-top: 2rem;
		margin-bottom: 2rem;
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

	.link {
		border: none;
		background: none;
		padding: 0;
		color: inherit;
		font: inherit;
		text-decoration: underline;
	}

	.button-primary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--accent-color);
		height: 'fit-content';
	}

	.button-primary p {
		color: #000;
		font-size: 1.4rem;
		font-weight: 600;
	}

	.button-primary img {
		width: 1.5rem;
		margin-left: 1rem;
	}

	.button-primary {
		padding: 0.5rem 0.6rem;
		border: 1px solid var(--accent-color);
		border-radius: 0.5rem;
		height: 3rem;
		transition: 0.1s;
	}

	.button-primary:hover {
		filter: brightness(85%);
	}

	.blog .button-primary {
		margin: 2rem auto 0;
	}

	.contact-info {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
		gap: 1rem;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		max-width: 32rem;
		margin-bottom: 1rem;
	}

	.contact-form label {
		font-size: 1.1rem;
		margin-top: 0.5rem;
		color: var(--accent-color);
	}

	.contact-form input:not(.honeypot),
	.contact-form textarea {
		width: 100%;
		padding: 0.5rem 0.6rem;
		font-size: 1.1rem;
		color: var(--accent-color);
		background-color: transparent;
		border: 1px solid var(--accent-color);
		border-radius: 0.5rem;
	}

	.contact-form [aria-invalid='true'] {
		border-color: #ff6b6b;
	}

	.contact-form .button-primary {
		align-self: flex-start;
		margin-top: 1rem;
	}

	.contact-form .button-primary:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.honeypot {
		position: absolute;
		left: -9999px;
		height: 0;
		width: 0;
		opacity: 0;
	}

	.form-error {
		color: #ff6b6b;
		font-size: 0.95rem;
	}

	.form-success {
		font-weight: 800;
	}

	@media (max-width: 576px) {
		.top > .row {
			position: absolute;
			top: 20%;
			transform: translateY(-20%);
			width: 100%;
		}

		section p {
			font-size: 1.1rem;
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

		.button-primary p {
			font-size: 1.2rem;
		}

		.button-primary:hover {
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
