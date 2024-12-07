<script lang="ts">
	import type { TechData } from '../techData';

	export let data: TechData;
	export let index: number;
</script>

<div class="tech-logo" style="animation-delay: -{0.5 * index}s">
	<div class="img-box">
		<img src={data.imageSrc} alt="{data.name} logo" />
	</div>
	<p>{data.name}</p>
</div>

<style>
	.tech-logo {
		position: relative;
		width: 20%;
		max-width: 8rem;
		margin: 1rem 1rem 2rem;
		animation: bob 3s ease-in-out infinite;
	}

	.img-box {
		position: relative;
		background-color: var(--accent-color);
		border-radius: 50%;
		width: 100%;
		aspect-ratio: 1 / 1;
		margin: 0 auto 0.5rem;
	}

	.img-box img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		height: 60%;
		max-width: 70%;
		object-fit: contain;
	}

	p {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		font-size: 1.4rem;
		font-family: 'Bakbak One', 'Arial', 'sans-serif';
		color: var(--accent-color);
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
		p {
			font-size: 1rem;
		}
	}

	@media (min-width: 576px) and (max-width: 768px) {
		p {
			font-size: 1.2rem;
		}
	}
</style>
