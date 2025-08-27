(function() {
    // Ensure Playfair Display font is available
    if (!document.querySelector('link[href*="Playfair+Display"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap';
        document.head.appendChild(link);
    }

    // Inject styling for the Megumi header
    const style = document.createElement('style');
    style.textContent = `
        #megumi-page-title {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            text-align: center;
            margin: 1rem 0 0.5rem;
        }
    `;
    document.head.appendChild(style);

    const targetTitles = ['Iron Man Store', 'Princess Palace', 'Family Corner'];

    const insertHeader = () => {
        const heading = Array.from(document.querySelectorAll('h1, h2, h3'))
            .find(el => targetTitles.includes(el.textContent.trim()));
        if (heading) {
            let header = document.getElementById('megumi-page-title');
            if (!header) {
                header = document.createElement('div');
                header.id = 'megumi-page-title';
                header.textContent = 'Megumi';
            }
            // Match the color of the page heading
            header.style.color = window.getComputedStyle(heading).color;
            heading.parentNode.insertBefore(header, heading);
        }
    };

    // Observe DOM mutations to handle SPA navigation
    const observer = new MutationObserver(insertHeader);
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial attempt
    insertHeader();
})();
