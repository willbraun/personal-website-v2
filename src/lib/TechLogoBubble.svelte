<script lang="ts">
	import type { TechData } from '../techData';

	interface Props {
		data: TechData;
	}

	let { data }: Props = $props();
</script>

<div class="tech-logo">
	<div class="img-box">
		<img src={data.imageSrc} alt="{data.name} logo" />
		<p class={data.name.length > 10 ? 'small-text' : ''}>{data.name}</p>
	</div>
</div>

<style>
	.tech-logo {
		position: relative;
		width: 128px;
	}

	.img-box {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: radial-gradient(
			circle at 30% 30%,
			rgba(255, 255, 255, 0.95) 0%,
			rgba(220, 235, 255, 0.85) 20%,
			rgba(200, 225, 255, 0.75) 50%,
			rgba(180, 215, 255, 0.65) 100%
		);
		border-radius: 50%;
		width: 100%;
		aspect-ratio: 1 / 1;
		box-shadow: 
			/* Inner highlight */
			inset -10px -10px 20px rgba(255, 255, 255, 0.8),
			inset 10px 10px 20px rgba(200, 220, 255, 0.3),
			/* Outer glow and shadow */ 0 8px 16px rgba(0, 0, 0, 0.15),
			0 2px 4px rgba(0, 0, 0, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.6);
		/* Remove backdrop-filter on mobile - it's very expensive */
		backdrop-filter: blur(10px);
		/* GPU acceleration */
		will-change: transform;
	}

	@media (max-width: 768px) {
		.img-box {
			/* Remove expensive backdrop filter on mobile */
			backdrop-filter: none;
		}
	}

	/* Glossy highlight overlay */
	.img-box::before {
		content: '';
		position: absolute;
		top: 10%;
		left: 15%;
		width: 40%;
		height: 40%;
		background: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.9) 0%,
			rgba(255, 255, 255, 0.4) 50%,
			transparent 70%
		);
		border-radius: 50%;
		pointer-events: none;
		z-index: 1;
	}

	/* Subtle shadow on bottom */
	.img-box::after {
		content: '';
		position: absolute;
		bottom: 5%;
		left: 20%;
		width: 60%;
		height: 30%;
		background: radial-gradient(ellipse at center, rgba(0, 0, 100, 0.1) 0%, transparent 70%);
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
	}

	.img-box img {
		position: relative;
		height: 55%;
		max-width: 70%;
		object-fit: contain;
		z-index: 2;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
	}

	p {
		position: relative;
		text-align: center;
		font-size: 1.2rem;
		font-family: 'Bakbak One', 'Arial', 'sans-serif';
		color: rgba(0, 0, 50, 0.9);
		z-index: 2;
		text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
	}

	.small-text {
		font-size: 0.9rem;
	}

	@keyframes bob {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(7%);
		}
		100% {
			transform: translateY(0);
		}
	}

	@media (max-width: 576px) {
		.tech-logo {
			width: 96px;
		}

		p {
			font-size: 0.8rem;
		}

		.small-text {
			font-size: 0.7rem;
		}

		.img-box {
			box-shadow:
				inset -8px -8px 16px rgba(255, 255, 255, 0.8),
				inset 8px 8px 16px rgba(200, 220, 255, 0.3),
				0 6px 12px rgba(0, 0, 0, 0.15),
				0 2px 4px rgba(0, 0, 0, 0.1);
		}
	}

	@media (min-width: 576px) and (max-width: 768px) {
		p {
			font-size: 1.2rem;
		}
	}
</style>
