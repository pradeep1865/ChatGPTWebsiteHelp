(function() {
    // Ensure Playfair Display font is available
    if (!document.querySelector('link[href*="Playfair+Display"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap';
        document.head.appendChild(link);
    }

    // Styling for the Megumi brand
    const style = document.createElement('style');
    style.textContent = `
        #megumi-brand {
            position: fixed;
            top: 0.5rem;
            left: 0.75rem;
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            font-size: 1.5rem;
            z-index: 1000;
        }
    `;
    document.head.appendChild(style);

    function getContrastColor(bg) {
        const match = bg.match(/\d+/g);
        if (!match) return '#000';
        const [r, g, b] = match.map(Number);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 125 ? '#000' : '#fff';
    }

    function insertBrand() {
        if (document.getElementById('megumi-brand')) return;
        const brand = document.createElement('div');
        brand.id = 'megumi-brand';
        brand.textContent = 'Megumi';

        const heading = document.querySelector('h1, h2, h3, h4, h5, h6');
        if (heading) {
            brand.style.color = window.getComputedStyle(heading).color;
        } else {
            const bg = window.getComputedStyle(document.body).backgroundColor;
            brand.style.color = getContrastColor(bg);
        }

        document.body.appendChild(brand);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertBrand);
    } else {
        insertBrand();
    }
})();
