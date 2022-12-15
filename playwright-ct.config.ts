import { resolve } from 'node:path';
import type { PlaywrightTestConfig } from '@playwright/experimental-ct-svelte';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
	testDir: './tests',
	timeout: 30 * 1000,
	fullyParallel: true,
	retries: 3,
	use: {
		headless: false,
		ctPort: 3100,
		ctViteConfig: {
			resolve: {
				alias: {
					$app: resolve('playwright/mocks/app')
				}
			}
		}
	}
};

export default config;
