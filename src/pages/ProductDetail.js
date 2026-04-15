import { products } from '../data/products.js';
import { addToCart } from '../utils/cart.js';

const ProductDetail = {
    render: () => {
        return `
            <div class="container section-padding animate-fade-in" id="product-container">
                <!-- Injected via afterRender -->
            </div>
            
            <!-- AI Size Modal -->
            <div id="aiSizeModal" style="display:none; position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); z-index: 2000; align-items: center; justify-content: center;">
                <div class="card" style="width: 100%; max-width: 500px; padding: 2rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
                        <h3>✨ AI Size Recommendation</h3>
                        <button id="closeAiModal" style="background:none; border:none; font-size: 1.5rem; cursor:pointer;">&times;</button>
                    </div>
                    <div id="aiFormStep">
                        <p class="mb-1 text-muted">Enter your basic measurements for a precision fit match.</p>
                        <div class="form-group">
                            <label class="form-label">Height (cm)</label>
                            <input type="number" id="aiHeight" class="form-control" placeholder="e.g. 165">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Weight (kg)</label>
                            <input type="number" id="aiWeight" class="form-control" placeholder="e.g. 60">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Body Shape</label>
                            <select id="aiShape" class="form-control">
                                <option>Hourglass</option>
                                <option>Pear</option>
                                <option>Apple</option>
                                <option>Rectangle</option>
                            </select>
                        </div>
                        <button id="btnCalculateSize" class="btn btn-primary btn-full mt-1">Calculate Perfect Size</button>
                    </div>
                    <div id="aiResultStep" style="display:none; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">✨</div>
                        <h4>Your Recommended Size is</h4>
                        <h2 class="text-primary mb-1" id="recommendedSizeTxt" style="font-size: 2.5rem;">M</h2>
                        <p class="text-muted mb-2">Based on our AI analysis, Size M provides a 94% fit confidence for this specific garment and fabric stretch.</p>
                        <button id="btnApplySize" class="btn btn-secondary btn-full">Apply Size & Continue</button>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender: async (params) => {
        const id = parseInt(params.get('id') || '1');
        const product = products.find(p => p.id === id) || products[0];

        const container = document.getElementById('product-container');
        container.innerHTML = `
            <div class="grid grid-2">
                <div>
                    <img src="${product.image}" alt="${product.name}" style="border-radius: var(--border-radius); width: 100%;">
                </div>
                <div style="padding: 1rem 0;">
                    <span class="badge mb-1">${product.category}</span>
                    <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem;">${product.name}</h1>
                    <div style="margin-bottom: 1.5rem; font-size: 1.1rem;">
                        <span>⭐ ${product.rating}</span> <span class="text-muted">(${product.reviews} reviews)</span>
                    </div>
                    <h2 class="text-primary mb-2">₹${product.price}</h2>
                    
                    <p class="mb-2" style="font-size: 1.1rem; line-height: 1.8;">${product.description}</p>
                    
                    <div class="mb-2">
                        <strong>Fabric:</strong> ${product.fabric}
                    </div>

                    ${product.category !== 'Fabric by Meter' ? `
                    <div class="mb-2">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                            <label class="form-label" style="margin: 0;">Select Size</label>
                            <button id="openAiModal" class="btn btn-outline" style="padding: 0.3rem 0.8rem; font-size: 0.85rem;">✨ AI Size Recommendation</button>
                        </div>
                        <select id="sizeSelect" class="form-control mb-1">
                            <option value="">Choose your size</option>
                            <option value="XS">XS (Extra Small)</option>
                            <option value="S">S (Small)</option>
                            <option value="M">M (Medium)</option>
                            <option value="L">L (Large)</option>
                            <option value="XL">XL (Extra Large)</option>
                            <option value="XXL">XXL (Double XL)</option>
                        </select>
                    </div>
                    ` : ''}

                    <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                        <button id="btnAddToCart" class="btn btn-primary" style="flex: 1; padding: 1rem;">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        // Cart Logic
        document.getElementById('btnAddToCart').addEventListener('click', () => {
            const sizeSelect = document.getElementById('sizeSelect');
            const size = sizeSelect ? sizeSelect.value : 'N/A';
            if (sizeSelect && !size) {
                alert('Please select a size first.');
                return;
            }
            addToCart(product, size);
        });

        // AI Modal Logic
        const aiModal = document.getElementById('aiSizeModal');
        const openAiBtn = document.getElementById('openAiModal');
        if (openAiBtn) {
            openAiBtn.addEventListener('click', () => {
                aiModal.style.display = 'flex';
                document.getElementById('aiFormStep').style.display = 'block';
                document.getElementById('aiResultStep').style.display = 'none';
            });
        }
        document.getElementById('closeAiModal').addEventListener('click', () => {
            aiModal.style.display = 'none';
        });

        document.getElementById('btnCalculateSize').addEventListener('click', () => {
            const btn = document.getElementById('btnCalculateSize');
            btn.innerText = 'Analyzing fit...';
            
            setTimeout(() => {
                // simple simulation
                const height = document.getElementById('aiHeight').value || 160;
                let recommended = 'M';
                if(height < 155) recommended = 'S';
                if(height > 175) recommended = 'L';

                document.getElementById('recommendedSizeTxt').innerText = recommended;
                document.getElementById('aiFormStep').style.display = 'none';
                document.getElementById('aiResultStep').style.display = 'block';
                btn.innerText = 'Calculate Perfect Size'; // reset
            }, 1000);
        });

        document.getElementById('btnApplySize').addEventListener('click', () => {
            const recommended = document.getElementById('recommendedSizeTxt').innerText;
            const sizeSelect = document.getElementById('sizeSelect');
            if (sizeSelect) {
                sizeSelect.value = recommended;
            }
            aiModal.style.display = 'none';
        });
    }
};

export default ProductDetail;
