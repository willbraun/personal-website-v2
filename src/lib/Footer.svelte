<script>
	let year = new Date(window.Date()).getFullYear()
</script>

<footer>
	<div class="footer-info">
		<p>Will Braun {year}</p>
		<a class="logo" href="https://www.linkedin.com/in/williamhbraun/" target="_blank" rel="noopener noreferrer">
			<img src="/src/assets/images/linkedin.svg" alt="GitHub icon" />
		</a>
		<a class="logo" href="https://github.com/willbraun" target="_blank" rel="noopener noreferrer">
			<img src="/src/assets/images/github.svg" alt="GitHub icon" />
		</a>
	</div>
</footer>

<style>
	footer {
		position: relative;
		width: 100%;
		background-color: #191919;
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
		color: var(--accent-color);
	}

	.footer-info > *:not(:last-child) {
		margin-right: 2rem;
	}

	.logo img {
		width: 2.5rem;
		filter: var(--svg-filter-white);
	}

	@media (max-width: 768px) {
		.footer-info > *:not(:last-child) {
			margin-right: 1rem;
		}
	}
</style>
