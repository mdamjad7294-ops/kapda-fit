let cartItems = JSON.parse(localStorage.getItem('kapda_cart')) || [];

export const addToCart = (product, size) => {
    cartItems.push({ ...product, selectedSize: size, cartId: Date.now() });
    localStorage.setItem('kapda_cart', JSON.stringify(cartItems));
    updateCartCount();
    alert('Added to cart!');
};

export const removeFromCart = (cartId) => {
    cartItems = cartItems.filter(item => item.cartId !== cartId);
    localStorage.setItem('kapda_cart', JSON.stringify(cartItems));
    updateCartCount();
};

export const getCart = () => {
    return cartItems;
};

export const clearCart = () => {
    cartItems = [];
    localStorage.setItem('kapda_cart', JSON.stringify([]));
    updateCartCount();
};

export const updateCartCount = () => {
    const el = document.getElementById('cart-count');
    if (el) {
        el.innerText = cartItems.length;
    }
};

export const initCartUI = () => {
    updateCartCount();
};
