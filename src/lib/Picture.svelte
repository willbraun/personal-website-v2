<script lang="ts">
	type ImageToolsSingle = {
		src: string;
		h?: number;
		w?: number;
	};

	interface ImageToolsOutput {
		fallback: ImageToolsSingle;
		sources: {
			avif: ImageToolsSingle[];
			webp: ImageToolsSingle[];
		};
	}

	export let image: ImageToolsOutput, alt: string;
</script>

<picture>
	<source srcset={image.sources.avif[0].src} type="image/avif" />
	<source srcset={image.sources.webp[0].src} type="image/webp" />
	<img src={image.fallback.src} {alt} />
</picture>
