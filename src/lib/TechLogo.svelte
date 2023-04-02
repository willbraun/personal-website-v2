<script lang="ts">
	export let data: {
		name: string;
		img: string;
	};
	export let index: number;
</script>

<div class="tech-logo" style="animation-delay: -{0.5 * index}s">
	<div class="img-box">
		<img src="/assets/images/tech-logos/{data.img}" alt="{data.name} logo" />
	</div>
	<p>{data.name}</p>
</div>

<style>
	.tech-logo {
		position: relative;
		width: 20%;
		max-width: 8rem;
		margin: 1rem;
		animation: bob 3s ease-in-out infinite;
	}

	.img-box {
		background-color: var(--accent-color);
		border-radius: 50%;
		width: 100%;
		aspect-ratio: 1 / 1;
		margin: 0 auto 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		position: relative;
		height: 60%;
	}

	p {
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
</style>
