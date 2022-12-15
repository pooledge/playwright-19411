<script lang="ts">
	import { multiplyByTwo } from '$lib/unit';

	let x = 2,
		product = multiplyByTwo(x);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Multiplication of {x} by 2 is {product}.</p>
