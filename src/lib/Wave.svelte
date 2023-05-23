<div>
	<svg
		class="waves"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28"
		preserveAspectRatio="none"
		shape-rendering="auto"
	>
		<defs>
			<path
				id="gentle-wave"
				d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
			/>
		</defs>
		<g class="parallax">
			<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0,28,85,0.7" />
			<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0,28,85,0.5)" />
			<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0,28,85,0.3)" />
			<use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(0,28,85,1)" />
		</g>
	</svg>
	<svg class="bottom">
		<rect width="100%" height="100%" fill="rgba(0,28,85,1)" />
	</svg>
</div>

<style>
	div {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: var(--home-bottom-height);
		width: 101vw;
		height: 11.9vh;
	}

	.waves {
		width: 100%;
		height: 10vh;
	}

	.bottom {
		width: 100%;
		height: 15vh;
		transform: translateY(-1px);
	}

	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 6s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}

	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}

	@media (max-width: 576px) {
		div {
			bottom: calc(var(--home-bottom-height-mobile) + 1vh);
			height: 8vh;
		}
	}
</style>
