import { products } from '../data/products.js';

const Shop = {
    render: () => {
        return `
            <div class="container section-padding animate-fade-in">
                <div class="text-center mb-3">
                    <h1>Shop Collection</h1>
                    <p class="text-muted">Find your perfect ethnic wear.</p>
                </div>
                
                <div style="display: flex; gap: 2rem;">
                    <!-- Sidebar Filters -->
                    <aside style="width: 250px; flex-shrink: 0;" class="mobile-hide">
                        <div class="card card-body">
                            <h4 class="mb-1">Categories</h4>
                            <ul style="list-style: none; margin-bottom: 2rem;">
                                <li class="mb-1"><label><input type="checkbox" checked> All</label></li>
                                <li class="mb-1"><label><input type="checkbox"> Readymade</label></li>
                                <li class="mb-1"><label><input type="checkbox"> Fabric by Meter</label></li>
                                <li class="mb-1"><label><input type="checkbox"> Custom Stitching</label></li>
                            </ul>
                            
                            <h4 class="mb-1">Fabric</h4>
                            <ul style="list-style: none; margin-bottom: 2rem;">
                                <li class="mb-1"><label><input type="checkbox"> Silk</label></li>
                                <li class="mb-1"><label><input type="checkbox"> Cotton</label></li>
                                <li class="mb-1"><label><input type="checkbox"> Velvet</label></li>
                                <li class="mb-1"><label><input type="checkbox"> Crepe</label></li>
                            </ul>
                            
                            <button class="btn btn-outline btn-full">Apply Filters</button>
                        </div>
                    </aside>

                    <!-- Product Grid -->
                    <div style="flex: 1;">
                        <div class="grid grid-3">
                            ${products.map(product => `
                                <div class="card">
                                    <div class="card-img-wrapper">
                                        <img src="${product.image}" alt="${product.name}" class="card-img">
                                    </div>
                                    <div class="card-body">
                                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                            <span class="badge">${product.category}</span>
                                            <span>⭐ ${product.rating} (${product.reviews})</span>
                                        </div>
                                        <h4 style="margin-bottom: 0.5rem; font-size: 1.1rem;">${product.name}</h4>
                                        <p class="text-muted mb-1" style="flex: 1; font-size: 0.9rem;">${product.fabric}</p>
                                        <div style="display: flex; justify-content: space-between; align-items: center;">
                                            <strong>₹${product.price}</strong>
                                            <a href="#/product?id=${product.id}" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.9rem;">View</a>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <style>
                @media (max-width: 768px) {
                    .mobile-hide { display: none; }
                }
            </style>
        `;
    }
};

export default Shop;
