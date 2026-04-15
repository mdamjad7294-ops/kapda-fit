import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import ProductDetail from './pages/ProductDetail.js';
import SmartFit from './pages/SmartFit.js';
import CustomStitching from './pages/CustomStitching.js';
import TailorNetwork from './pages/TailorNetwork.js';
import Cart from './pages/Cart.js';

import { initCartUI } from './utils/cart.js';

const routes = {
    '/': Home,
    '/shop': Shop,
    '/product': ProductDetail,
    '/smart-fit': SmartFit,
    '/custom-stitching': CustomStitching,
    '/tailors': TailorNetwork,
    '/cart': Cart
};

const router = async () => {
    // get path
    let path = window.location.hash.slice(1) || '/';
    // split query params if any
    const [pathName, queryString] = path.split('?');
    
    // find matching route
    let match = routes[pathName];
    if (!match) {
        match = Home;
    }

    const app = document.getElementById('app');
    
    // Simple URL parameter parsing
    const params = new URLSearchParams(queryString || '');
    
    // Render the view
    app.innerHTML = match.render();
    
    // Run view specific JS if any
    if (match.afterRender) {
        await match.afterRender(params);
    }
    
    window.scrollTo(0, 0);

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        const hrefAttr = link.getAttribute('href');
        if (hrefAttr === '#' + pathName || (pathName === '/' && hrefAttr === '#/')) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
    // convert regular links to hash links for SPA initially
    document.querySelectorAll('[data-link]').forEach(link => {
        const href = link.getAttribute('href');
        if(!href.startsWith('#')) {
            link.setAttribute('href', '#' + href);
        }
    });
    
    // Mobile menu
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('navLinks');
    btn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    initCartUI();
    router();
});
