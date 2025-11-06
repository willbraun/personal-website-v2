<script lang="ts">
	import type { TechData } from '../techData';

	interface Props {
		data: TechData;
		index: number;
	}

	let { data, index }: Props = $props();
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
		background-color: var(--accent-color);
		border-radius: 50%;
		width: 100%;
		aspect-ratio: 1 / 1;
	}

	.img-box img {
		position: relative;
		height: 55%;
		max-width: 70%;
		object-fit: contain;
	}

	p {
		position: relative;
		text-align: center;
		font-size: 1.2rem;
		font-family: 'Bakbak One', 'Arial', 'sans-serif';
		color: black;
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
	}

	@media (min-width: 576px) and (max-width: 768px) {
		p {
			font-size: 1.2rem;
		}
	}
</style>
