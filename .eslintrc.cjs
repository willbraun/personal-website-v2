module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				'no-undef': 'off', // Disabled for Svelte files as it conflicts with Svelte syntax
				'@typescript-eslint/no-unused-vars': 'off', // Disabled for Svelte files as imports are used in templates
				'no-unused-vars': 'off' // Also disable the base ESLint version
			}
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-undef': 'off', // Let TypeScript handle undefined variables
		'missing-declaration': 'off' // Disabled globally - false positives for Svelte components and variables
	}
};
