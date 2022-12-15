import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	use: {
		headless: false
	},
	testDir: './tests',
	outputDir: './playwright/artefacts',
	webServer: {
		command: 'npm run build && npm run preview',
		port: 3000,
		reuseExistingServer: true
	},
	timeout: 30 * 1000,
	retries: 3
};

export default config;
