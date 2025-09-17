console.log('Script.js carregado na página:', window.location.pathname);

// Adicione esta variável fora do 'DOMContentLoaded'
let carouselsInitialized = false;

document.addEventListener('DOMContentLoaded', (event) => {
    
    // VERIFICAÇÃO DE INICIALIZAÇÃO
    if (carouselsInitialized) {
        console.log('Carrosséis já foram inicializados. Abortando a segunda execução.');
        return; // Sai da função para evitar duplicação
    }
    carouselsInitialized = true; // Marca como inicializado

    // --- Lógica do Menu Hambúrguer ---
    const menuToggleLabel = document.getElementById('menu-toggle-label');
    const menuLinks = document.querySelector('.menu-links');
    const menuFecharLabel = document.getElementById('menu-fechar-label');
    const navLinks = document.querySelectorAll('.menu-links a');

    if (menuToggleLabel && menuLinks) {
        menuToggleLabel.addEventListener('click', () => {
            menuLinks.classList.add('menu-aberto');
        });
    }
    
    if (menuFecharLabel && menuLinks) {
        menuFecharLabel.addEventListener('click', () => {
            menuLinks.classList.remove('menu-aberto');
        });
    }
    
    if (navLinks && menuLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuLinks.classList.remove('menu-aberto');
            });
        });
    }

    // --- Lógica do Carrossel (Única e Correta) ---
    console.log('Inicializando carrosséis...');
    
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const nextButton = carousel.querySelector('.next-button');
        const prevButton = carousel.querySelector('.prev-button');
        const items = Array.from(track.children);
        let currentItem = 0;

        const updateCarousel = () => {
            if (items.length > 0) {
                const itemWidth = items[0].getBoundingClientRect().width;
                track.style.transform = `translateX(-${currentItem * itemWidth}px)`;
            }
        };

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentItem = (currentItem < items.length - 1) ? currentItem + 1 : 0;
                updateCarousel();
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentItem = (currentItem > 0) ? currentItem - 1 : items.length - 1;
                updateCarousel();
            });
        }

        window.addEventListener('resize', updateCarousel);
        
        updateCarousel();
    });
});