import { setContext } from 'svelte';
let item;

function addToCart(itemId: string) {
	setContext('cart', {
		items: []
	});
}

export default addToCart;
