<script lang="ts">
	export let className: string, avif: string, webp: string, fallback: string, alt: string;
</script>

<picture>
	<source srcset={avif} type="image/avif" />
	<source srcset={webp} type="image/webp" />
	<img class={className} src={fallback} {alt} />
</picture>
