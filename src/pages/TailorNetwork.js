import { tailors } from '../data/products.js';

const TailorNetwork = {
    render: () => {
        return `
            <div class="container section-padding animate-fade-in">
                <div class="text-center mb-3">
                    <h1>Our Verified Tailor Network</h1>
                    <p class="text-muted">Top-rated artisans and stitching hubs near you.</p>
                </div>
                
                <div class="grid grid-3">
                    ${tailors.map(tailor => `
                        <div class="card text-center" style="padding: 2rem;">
                            <img src="${tailor.image}" alt="${tailor.name}" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem;">
                            <h3 class="mb-1">${tailor.name}</h3>
                            <p class="text-primary mb-1" style="font-weight: 500;">${tailor.specialty}</p>
                            <div class="mb-1">
                                <span>⭐ ${tailor.rating} (${tailor.reviews} reviews)</span>
                            </div>
                            <p class="text-muted mb-2">${tailor.location}</p>
                            <a href="#/custom-stitching" class="btn btn-outline">Book Now</a>
                        </div>
                    `).join('')}
                </div>
                
                <div class="card card-body mt-3 text-center" style="background: var(--color-primary); color: white;">
                    <h3 style="color: white;">Are you a professional tailor?</h3>
                    <p style="color: var(--color-secondary-light); margin-bottom: 1.5rem;">Join Kapda+ Fit to expand your business and get verified leads.</p>
                    <button class="btn btn-secondary" onclick="alert('Application started')">Apply to Join Network</button>
                </div>
            </div>
        `;
    }
};

export default TailorNetwork;
