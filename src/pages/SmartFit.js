const SmartFit = {
    render: () => {
        return `
            <div class="container section-padding animate-fade-in text-center">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Smart Fit Technology</h1>
                <p class="text-muted" style="max-width: 600px; margin: 0 auto 3rem;">Our proprietary AI sizing system takes your basic measurements and recommends the perfect size based on the garment's cut, fabric, and stretch.</p>
                
                <div class="card" style="max-width: 600px; margin: 0 auto; text-align: left;">
                    <div class="card-body">
                        <h3 class="mb-2 text-primary">Calculate Your Size</h3>
                        <div class="form-group">
                            <label class="form-label">Height (cm)</label>
                            <input type="number" id="sfHeight" class="form-control" placeholder="e.g. 165">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Weight (kg)</label>
                            <input type="number" id="sfWeight" class="form-control" placeholder="e.g. 60">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Bust/Chest (cm)</label>
                            <input type="number" class="form-control" placeholder="e.g. 90">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Waist (cm)</label>
                            <input type="number" class="form-control" placeholder="e.g. 70">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Hips (cm)</label>
                            <input type="number" class="form-control" placeholder="e.g. 95">
                        </div>
                        
                        <button id="btnSmartFit" class="btn btn-primary btn-full mt-2">Analyze Measurements</button>
                    </div>
                </div>

                <div id="sfResult" style="display: none; max-width: 600px; margin: 2rem auto;" class="card card-body text-center animate-fade-in">
                    <h2 class="text-primary mb-1">Your Perfect Size Match: M</h2>
                    <p class="text-muted mb-2">Your measurements align beautifully with our Medium size profile. You also fit within the ideal profile for standard Custom Stitching cloth requirement (3 meters).</p>
                    <div style="display: flex; gap: 1rem; justify-content: center;">
                        <a href="#/shop" class="btn btn-primary">Shop Readymade M</a>
                        <a href="#/custom-stitching" class="btn btn-outline">Explore Custom Stitching</a>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender: async () => {
        const btn = document.getElementById('btnSmartFit');
        btn.addEventListener('click', () => {
            btn.innerText = "Analyzing with AI...";
            setTimeout(() => {
                document.getElementById('sfResult').style.display = 'block';
                btn.innerText = "Re-analyze Measurements";
            }, 1000);
        });
    }
};

export default SmartFit;
