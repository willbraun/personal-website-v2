<script lang="ts">
	import linkedin from '/src/assets/images/linkedin.svg';
	import github from '/src/assets/images/github.svg';

	let year: string = new Date().getFullYear().toString();
</script>

<footer>
	<div class="footer-info">
		<p>Will Braun {year}</p>
		<a
			class="logo"
			href="https://www.linkedin.com/in/williamhbraun/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={linkedin} alt="GitHub icon" loading="lazy" />
		</a>
		<a class="logo" href="https://github.com/willbraun" target="_blank" rel="noopener noreferrer">
			<img src={github} alt="GitHub icon" loading="lazy" />
		</a>
	</div>
</footer>

<style>
	footer {
		position: relative;
		width: 100%;
		background-color: var(--footer-color);
		padding: 1rem;
	}

	.footer-info {
		display: flex;
		margin: 0 auto;
		justify-content: center;
		align-items: center;
	}

	.footer-info p {
		font-family: 'Bakbak One';
		font-size: 1.8rem;
		color: #999;
	}

	.footer-info > *:not(:last-child) {
		margin-right: 2rem;
	}

	.logo img {
		width: 2.5rem;
		filter: var(--svg-filter-999999);
	}

	@media (max-width: 768px) {
		.footer-info > *:not(:last-child) {
			margin-right: 1rem;
		}
	}
</style>
