import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), imagetools()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				silenceDeprecations: ['import'],
				quietDeps: true
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		host: '0.0.0.0'
	}
});
