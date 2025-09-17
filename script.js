console.log('Script.js carregado na página:', window.location.pathname);
document.addEventListener('DOMContentLoaded', (event) => {
    
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

    // --- Lógica do Carrossel (Versão para Múltiplos Carrosséis) ---
    console.log('Inicializando carrosséis...');
    
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const nextButton = carousel.querySelector('.next-button');
        const prevButton = carousel.querySelector('.prev-button');
        const items = Array.from(track.children);
        let currentItem = 0;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentItem * 100}%)`;
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
    });

    // --- Código Original do Carrossel (para compatibilidade) ---
    // Este código é mantido para não quebrar as outras páginas
    const track = document.getElementById('carousel-track');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    if (track && prevButton && nextButton) {
        const items = track.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        let currentIndex = 0;

        const updateCarousel = () => {
            if (items.length > 0) {
                const itemWidth = items[0].getBoundingClientRect().width;
                track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }
        };

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
        
        updateCarousel();
        const track = document.querySelector('.carousel-track');
        const item = document.querySelector('.carousel-item');

// Exemplo de como a navegação para a próxima imagem funcionaria
function nextImage() {
    currentIndex++;
    // Garante que não ultrapasse a última imagem
    // Por exemplo, se tiver 3 imagens, o índice máximo é 2.
    if (currentIndex >= track.children.length) {
        currentIndex = 0; // Volta para o início se chegar ao fim
    }
    
    // A translação deve ser baseada na largura do item do carrossel
    const itemWidth = item.getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
    }
});