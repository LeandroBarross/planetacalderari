console.log('Script.js carregado na página:', window.location.pathname);
document.addEventListener('DOMContentLoaded', (event) => {
    
    // --- Lógica do Menu Hambúrguer ---
    // Seleciona o elemento do ícone do menu (a barra de hambúrguer)
    const menuToggleLabel = document.getElementById('menu-toggle-label');
    
    // Seleciona o container dos links do menu
    const menuLinks = document.querySelector('.menu-links');
    
    // Seleciona o botão de fechar o menu (o 'X')
    const menuFecharLabel = document.getElementById('menu-fechar-label');
    
    // Seleciona todos os links de navegação dentro do menu
    const navLinks = document.querySelectorAll('.menu-links a');

    // Adiciona um evento de clique no ícone do menu hambúrguer
    if (menuToggleLabel && menuLinks) {
        menuToggleLabel.addEventListener('click', () => {

            // Adiciona a classe 'menu-aberto' para mostrar o menu
            menuLinks.classList.add('menu-aberto');
        });
    }
    
    // Adiciona um evento de clique no botão de fechar o menu
    if (menuFecharLabel && menuLinks) {
        menuFecharLabel.addEventListener('click', () => {
            // Remove a classe 'menu-aberto' para esconder o menu
            menuLinks.classList.remove('menu-aberto');
        });
    }
    
    // Adiciona um evento de clique para cada link do menu
    if (navLinks && menuLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove a classe 'menu-aberto' para fechar o menu ao clicar em um link
                menuLinks.classList.remove('menu-aberto');
            });
        });
    }

    []
    // Esta versão funciona com múltiplos carrosséis na mesma página
    console.log('Inicializando carrosséis...');
    
    // Encontra todos os botões de carrossel na página
    const carouselButtons = document.querySelectorAll('.carousel-nav-button');
    
    // Função para mover um carrossel específico
    function moverCarrossel(carrosselId, direcao) {
        const track = document.getElementById(`track-${carrosselId}`);
        const items = track.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        
        // Encontra o índice atual (procura por data attribute ou calcula)
        let currentIndex = 0;
        const transformValue = track.style.transform;
        if (transformValue) {
            const match = transformValue.match(/translateX\(-(\d+)%\)/);
            if (match) {
                currentIndex = parseInt(match[1]) / 100;
            }
        }
        
        // Calcula o novo índice
        if (direcao === 'next') {
            currentIndex = (currentIndex + 1) % totalItems;
        } else {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        }
        
        // Atualiza a posição
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        console.log(`Carrossel ${carrosselId} movido para posição ${currentIndex}`);
    }

    // Adiciona event listeners para todos os botões de carrossel
    carouselButtons.forEach(button => {
        button.addEventListener('click', () => {
            const carrosselId = button.getAttribute('data-carousel');
            const direcao = button.classList.contains('next-button') ? 'next' : 'prev';
            moverCarrossel(carrosselId, direcao);
        });
    });

    // Inicializa todos os carrosséis na posição inicial
    const carrosselTracks = document.querySelectorAll('[id^="track-"]');
    carrosselTracks.forEach(track => {
        track.style.transform = 'translateX(0%)';
    });

    // --- Código Original do Carrossel (para compatibilidade com outras páginas) ---
    // Este código é mantido para não quebrar as outras páginas
    const track = document.getElementById('carousel-track');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    if (track && prevButton && nextButton) {
        const items = track.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        let currentIndex = 0;

        // Função para atualizar a posição do carrossel
        const updateCarousel = () => {
            if (items.length > 0) {
                const itemWidth = items[0].getBoundingClientRect().width;
                track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            }
        };

        // Adiciona event listeners para os botões de navegação
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });

        // Atualiza o carrossel quando a janela for redimensionada
        window.addEventListener('resize', updateCarousel);
        
        // Chamada inicial para posicionar o carrossel
        updateCarousel();
    }
});