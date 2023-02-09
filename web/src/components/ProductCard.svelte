<script>
	// @ts-nocheck

	import addToCart from 'src/lib/AddToCart';

	export let product;
</script>

<body>
	<div class="card card-compact w-96 bg-base-100 shadow-xl">
		<!-- <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> -->
		<div class="card-body">
			<h2 class="card-title">
				{product.name}
				<div class="badge badge-secondary">{product.price} SEK</div>
			</h2>
			<p>{product.description}</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary" on:click={addToCart(product.id)}>Lägg i varukorg</button>
			</div>
		</div>
	</div>
</body>
