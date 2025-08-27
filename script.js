document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const heroTitle = document.querySelector('.hero h2');
    const heroText = document.querySelector('.hero p');

    function applyTheme(theme) {
        overlay.style.display = 'none';
        document.body.classList.remove('boy-theme', 'girl-theme', 'scroll-theme');

        let characterEmoji = '';
        switch (theme) {
            case 'boy':
                document.body.classList.add('boy-theme');
                heroTitle.textContent = 'Iron Man Gear';
                heroText.textContent = 'Fly high with heroic styles.';
                characterEmoji = '🤖';
                break;
            case 'girl':
                document.body.classList.add('girl-theme');
                heroTitle.textContent = 'Cinderella Collection';
                heroText.textContent = 'Magic fit for a princess.';
                characterEmoji = '👸';
                break;
            default:
                document.body.classList.add('scroll-theme');
                heroTitle.textContent = 'Family Favorites';
                heroText.textContent = 'Comforts for everyone.';
                characterEmoji = '👨\u200d👩\u200d👧';
        }

        const char = document.createElement('div');
        char.classList.add('character');
        char.classList.add(theme === 'boy' ? 'boy' : theme === 'girl' ? 'girl' : 'scroll');
        char.textContent = characterEmoji;
        document.body.appendChild(char);
        setTimeout(() => char.remove(), 4000);
    }

    document.getElementById('boy-btn').addEventListener('click', () => applyTheme('boy'));
    document.getElementById('girl-btn').addEventListener('click', () => applyTheme('girl'));
    document.getElementById('scroll-btn').addEventListener('click', () => applyTheme('scroll'));
});
