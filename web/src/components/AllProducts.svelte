<script lang="ts">
	import PocketBase from 'pocketbase';
	import ProductCard from './ProductCard.svelte';

	const pb = new PocketBase('http://127.0.0.1:8090');

	async function getProducts() {
		const records = await pb.collection('products').getFullList(200 /* batch size */, {
			sort: '-created'
		});
		return records;
	}
	let products = getProducts();
</script>

<body>
	<section class="grid grid-cols-4 container mx-auto my-8">
		<div>
			<h1 class="text-4xl">Products</h1>
			<ul>
				{#await products}
					<li>Loading...</li>
				{:then products}
					{#each products as product}
						<ProductCard {product} />
					{/each}
				{/await}
			</ul>
		</div>
	</section>
</body>
