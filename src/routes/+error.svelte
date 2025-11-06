<script lang="ts">
	import { page } from '$app/state';
</script>

<div>
	<section>
		<h1>Error</h1>
		<p>{page.status} - {page.error?.message}</p>
		<br />
		<a href="/">Home</a>
	</section>
</div>

<style>
	div {
		width: 100%;
		height: 100vh;
		background-color: var(--background-color);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
	}

	section > h1,
	section > p {
		background: var(--sky-gradient);
		font-family: 'Bakbak One';
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		word-wrap: break-word;
	}

	h1 {
		font-size: 6rem;
	}

	p {
		font-size: 3rem;
	}

	a {
		font-size: 1.5rem;
		color: var(--sky-blue);
	}
</style>
