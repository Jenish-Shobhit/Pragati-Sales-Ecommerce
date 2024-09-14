
      // Create paint splashes
        const paintSplash = document.getElementById('paintSplash');
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FDCB6E', '#6C5CE7', '#FFA07A'];

        for (let i = 0; i < 20; i++) {
            const splash = document.createElement('div');
            splash.classList.add('splash');
            splash.style.width = `${Math.random() * 100 + 50}px`;
            splash.style.height = splash.style.width;
            splash.style.top = `${Math.random() * 100}%`;
            splash.style.left = `${Math.random() * 100}%`;
            splash.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            splash.style.animationDelay = `${Math.random() * 10}s`;
            paintSplash.appendChild(splash);
        }

        // Populate color palette
        const colorPalette = document.getElementById('colorPalette');
        const paletteColors = [
            {name: 'Sunset Orange', color: '#FF6B6B'},
            {name: 'Ocean Blue', color: '#4ECDC4'},
            {name: 'Sky Blue', color: '#45B7D1'},
            {name: 'Sunflower Yellow', color: '#FDCB6E'},
            {name: 'Lavender', color: '#6C5CE7'},
            {name: 'Peach', color: '#FFA07A'}
        ];

        paletteColors.forEach(swatch => {
            const colorSwatch = document.createElement('div');
            colorSwatch.classList.add('color-swatch');
            colorSwatch.style.backgroundColor = swatch.color;

            const colorName = document.createElement('div');
            colorName.classList.add('color-name');
            colorName.innerText = swatch.name;

            colorSwatch.appendChild(colorName);
            colorPalette.appendChild(colorSwatch);
        });
