window.onload = function() {
    const savedData = localStorage.getItem('aespa_user');

    if (savedData) {
        const userData = JSON.parse(savedData);
        
        document.getElementById('welcome-name').textContent = `Welcome, ${userData.name}!`;
        document.getElementById('display-bias').textContent = userData.bias;
        document.getElementById('display-song').textContent = userData.song;

        const detailBoxes = document.querySelectorAll('.detail-box');
        const biasBox = document.getElementById('display-bias').parentElement;
        
        const biasImages = {
            'karina': 'public/assets/karina-bg.jpg',
            'winter': 'public/assets/winter-bg.png',
            'giselle': 'public/assets/giselle-bg.png',
            'ningning': 'public/assets/ningning-bg.png'
        };

        const biasColors = {
            'karina': '#47bce3',  // Blue
            'winter': '#73e273',  // Green/White vibe
            'giselle': '#c13d3d', // Red
            'ningning': '#bd7f15' // Yellow/Gold
        };

        const biasKey = userData.bias.toLowerCase();
        const selectedImage = biasImages[biasKey];
        const selectedColor = biasColors[biasKey];

        if (selectedImage) {
            biasBox.classList.add('bias-background-active');
            biasBox.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('${selectedImage}')`;
        }

        if (selectedColor) {
            detailBoxes.forEach(box => {
                box.style.boxShadow = `5px 5px 0px ${selectedColor}`;
                box.style.borderColor = selectedColor;
                
                const label = box.querySelector('h3');
                if (label) label.style.color = selectedColor;
            });
        }
    }
};