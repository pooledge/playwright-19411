import { get } from 'svelte/store';
import { page } from '$app/stores';

export const multiplyByTwo = (x: number) => {
	console.log(get(page)); // {}
	return x * 2;
};
