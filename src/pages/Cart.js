import { getCart, removeFromCart } from '../utils/cart.js';

const Cart = {
    render: () => {
        const cartItems = getCart();
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);

        if (cartItems.length === 0) {
            return `
                <div class="container section-padding text-center animate-fade-in">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                    <h2>Your Cart is Empty</h2>
                    <p class="text-muted mb-2">Looks like you haven't added anything to your cart yet.</p>
                    <a href="#/shop" class="btn btn-primary">Start Shopping</a>
                </div>
            `;
        }

        return `
            <div class="container section-padding animate-fade-in" id="cart-container">
                <h1 class="mb-3 text-center">Shopping Cart</h1>
                <div class="grid grid-2" style="grid-template-columns: 2fr 1fr; align-items: start;">
                    <div class="cart-items">
                        ${cartItems.map(item => `
                            <div class="card card-body mb-1" style="display: flex; flex-direction: row; align-items: center; gap: 1rem; padding: 1rem;">
                                <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: var(--border-radius);">
                                <div style="flex: 1;">
                                    <h4 style="margin-bottom: 0.2rem;">${item.name}</h4>
                                    <p class="text-muted" style="font-size: 0.9rem;">Size: <strong>${item.selectedSize}</strong> | Fabric: ${item.fabric}</p>
                                </div>
                                <div style="text-align: right;">
                                    <h4 class="text-primary mb-1">₹${item.price}</h4>
                                    <button class="btn btn-outline cart-remove-btn" data-id="${item.cartId}" style="padding: 0.3rem 0.5rem; font-size: 0.8rem;">Remove</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="card card-body" style="position: sticky; top: 100px;">
                        <h3 class="mb-2">Order Summary</h3>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                            <span>Subtotal</span>
                            <span>₹${total}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                            <span>Shipping</span>
                            <span class="text-primary">Free</span>
                        </div>
                        <hr style="border: none; border-top: 1px solid var(--color-border); margin: 1rem 0;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 2rem;">
                            <strong>Total</strong>
                            <strong class="text-primary" style="font-size: 1.2rem;">₹${total}</strong>
                        </div>
                        <button class="btn btn-primary btn-full" onclick="alert('Proceeding to Checkout... (Simulation)')">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender: async () => {
        document.querySelectorAll('.cart-remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                removeFromCart(id);
                // re-render the view
                const app = document.getElementById('app');
                app.innerHTML = Cart.render();
                if(Cart.afterRender) {
                    Cart.afterRender();
                }
            });
        });
    }
};

export default Cart;
