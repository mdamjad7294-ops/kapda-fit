import { products } from '../data/products.js';

const Home = {
    render: () => {
        const featuredProducts = products.slice(0, 3);
        
        return `
            <div class="hero animate-fade-in" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1600') center/cover; padding: 10rem 2rem; text-align: center; color: white;">
                <h1 style="color: white; font-size: 3.5rem; margin-bottom: 1.5rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Where Fashion Meets the Perfect Fit</h1>
                <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto 2.5rem; opacity: 0.9;">Discover stunning ethnic wear tailored perfectly to your body using our AI-powered size recommendation technology.</p>
                <a href="#/shop" class="btn btn-secondary" style="font-size: 1.1rem; padding: 1rem 2rem;">Find Your Perfect Fit</a>
            </div>

            <section class="container section-padding">
                <div class="text-center mb-3">
                    <h2>Our Services</h2>
                    <p class="text-muted">Explore how Kapda+ Fit brings you the perfect wardrobe.</p>
                </div>
                <div class="grid grid-3">
                    <div class="card text-center" style="padding: 2rem;">
                        <h3 class="text-primary">Readymade Elegance</h3>
                        <p class="text-muted mb-2">Shop our curated collection of ethnic wear with AI size matching for zero-return shopping.</p>
                        <a href="#/shop" class="btn btn-outline">Shop Collection</a>
                    </div>
                    <div class="card text-center" style="padding: 2rem;">
                        <h3 class="text-primary">Fabric by Meter</h3>
                        <p class="text-muted mb-2">Choose from our premium selection of silk, velvet, and georgette for your custom outfits.</p>
                        <a href="#/shop" class="btn btn-outline">Explore Fabrics</a>
                    </div>
                    <div class="card text-center" style="padding: 2rem;">
                        <h3 class="text-primary">Custom Stitching</h3>
                        <p class="text-muted mb-2">Upload your measurements and connect with top local tailors to stitch your dream outfit.</p>
                        <a href="#/custom-stitching" class="btn btn-outline">Book a Tailor</a>
                    </div>
                </div>
            </section>

            <section class="container section-padding" style="background-color: var(--color-accent-light); border-radius: var(--border-radius); padding-left: 2rem; padding-right: 2rem;">
                <div class="grid grid-2" style="align-items: center;">
                    <div>
                        <h2>Smart Fit Technology</h2>
                        <p class="mb-2">Say goodbye to "does it fit?" anxiety. Our proprietary AI sizing system takes your basic measurements and recommends the perfect size based on the garment's cut, fabric, and stretch.</p>
                        <ul style="list-style: none; margin-bottom: 2rem;">
                            <li style="margin-bottom: 0.5rem;">✓ AI Size Match</li>
                            <li style="margin-bottom: 0.5rem;">✓ Smart Cloth Calculator</li>
                            <li style="margin-bottom: 0.5rem;">✓ Virtual Fit Prediction</li>
                        </ul>
                        <a href="#/smart-fit" class="btn btn-primary">Try Smart Fit AI</a>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1558769132-cb1fac0840c2?auto=format&fit=crop&q=80&w=600" alt="Tailoring measurements" style="border-radius: var(--border-radius); box-shadow: var(--shadow-lg);">
                    </div>
                </div>
            </section>

            <section class="container section-padding">
                <div class="text-center mb-3">
                    <h2>Trending Collections</h2>
                    <p class="text-muted">The most loved styles this week.</p>
                </div>
                <div class="grid grid-3">
                    ${featuredProducts.map(product => `
                        <div class="card">
                            <div class="card-img-wrapper">
                                <img src="${product.image}" alt="${product.name}" class="card-img">
                            </div>
                            <div class="card-body">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <span class="badge">${product.category}</span>
                                    <span>⭐ ${product.rating}</span>
                                </div>
                                <h4 style="margin-bottom: 0.5rem;">${product.name}</h4>
                                <p class="text-muted mb-1" style="flex: 1;">${product.fabric}</p>
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <strong>₹${product.price}</strong>
                                    <a href="#/product?id=${product.id}" class="btn btn-outline" style="padding: 0.5rem 1rem;">View Details</a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="text-center mt-3">
                    <a href="#/shop" class="btn btn-primary">View All Collections</a>
                </div>
            </section>

            <section class="container section-padding">
                <div class="text-center mb-3">
                    <h2>What Our Customers Say</h2>
                </div>
                <div class="grid grid-3">
                    <div class="card card-body text-center">
                        <p class="mb-1">"The AI size recommendation was spot on! For the first time, I didn't have to return my lehenga. Perfect fit."</p>
                        <strong>- Ananya S.</strong>
                    </div>
                    <div class="card card-body text-center">
                        <p class="mb-1">"Loved the Custom Stitching feature. Bought the fabric here and got it stitched from a premium tailor without leaving my house."</p>
                        <strong>- Priya M.</strong>
                    </div>
                    <div class="card card-body text-center">
                        <p class="mb-1">"The smart cloth calculator told me exactly how many meters I needed for an Anarkali suit. Saved me a lot of money."</p>
                        <strong>- Riya K.</strong>
                    </div>
                </div>
            </section>
        `;
    }
};

export default Home;
