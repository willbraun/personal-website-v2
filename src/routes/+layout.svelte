<script lang="ts">
	import './../normalize.css';
	import './../scss/main.scss';
	import './../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
