const CustomStitching = {
    render: () => {
        return `
            <div class="container section-padding animate-fade-in">
                <div class="text-center mb-3">
                    <h1>Custom Stitching Services</h1>
                    <p class="text-muted">Get your perfect outfit stitched from the comfort of your home.</p>
                </div>
                
                <div class="grid grid-2">
                    <div class="card card-body">
                        <h3 class="mb-2 text-primary">Stitching Request</h3>
                        
                        <div class="form-group">
                            <label class="form-label">Garment Type</label>
                            <select class="form-control">
                                <option>Kurta Set</option>
                                <option>Lehenga</option>
                                <option>Blouse</option>
                                <option>Sherwani</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Fabric</label>
                            <select class="form-control">
                                <option>I will send my own fabric</option>
                                <option>Purchase from Kapda+ collection</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Measurements Info</label>
                            <div class="form-control" style="background: var(--color-background);">
                                ✓ Saved from SmartFit AI profile
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Preferred Tailor/Studio (Optional)</label>
                            <input type="text" class="form-control" placeholder="Leave blank for auto-assign">
                        </div>

                        <div class="form-group">
                            <label class="form-label">Reference Images (Optional)</label>
                            <input type="file" class="form-control">
                        </div>
                        
                        <button class="btn btn-primary btn-full mt-2" onclick="alert('Stitching request submitted! Our tailor partner will contact you shortly.')">Submit Stitching Request</button>
                    </div>

                    <div>
                        <div class="card card-body mb-2" style="background: var(--color-accent-light);">
                            <h3>How It Works</h3>
                            <ul style="padding-left: 1.5rem; margin-top: 1rem; line-height: 2;">
                                <li><strong>1. Auto Measurements:</strong> We use your AI estimated measurements.</li>
                                <li><strong>2. Pick Style & Fabric:</strong> Select what to stitch.</li>
                                <li><strong>3. Tailor Match:</strong> We match you with verified local tailors.</li>
                                <li><strong>4. Doorstep Delivery:</strong> Receive your perfectly stitched outfit.</li>
                            </ul>
                        </div>
                        
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=600" alt="Tailor at work" style="border-radius: var(--border-radius); box-shadow: var(--shadow-sm); width: 100%;">
                    </div>
                </div>
            </div>
        `;
    }
};

export default CustomStitching;
