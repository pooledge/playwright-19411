import { test, expect } from '@playwright/test';
import { multiplyByTwo } from '$lib/unit';

test.describe('Test', () => {
	test('multiplies by 2', () => {
		expect(multiplyByTwo(2)).toEqual(4);
	});
});
