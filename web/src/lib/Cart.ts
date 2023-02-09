import { setContext, getContext } from 'svelte';
let item: string;

type Cart = {
	itemId: string;
};

const Cart = {
	Add(itemId: string) {
		console.log('hej');
		let cart: Cart = JSON.parse(localStorage.getItem('cart') || '[]');

		cart = {
			...cart,
			itemId
		};

		console.log(cart);

		localStorage.setItem('cart', String(cart));
	}
};

export default Cart;
