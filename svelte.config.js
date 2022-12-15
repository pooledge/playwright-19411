import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'$api/*': './src/api/*',
			'$components/*': './src/components/*',
			'$fonts/*': './src/fonts/*',
			'$routes/*': './src/routes/*',
			'$stores/*': './src/stores/*',
			'$styles/*': './src/styles/*',
			'$types/*': './src/types/*'
		}
	}
};

export default config;
