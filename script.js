console.log('Script.js carregado com sucesso!');

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DO MENU HAMBÚRGUER ---
    const menuToggleLabel = document.getElementById('menu-toggle-label');
    const menuLinks = document.querySelector('.menu-links');
    const menuFecharLabel = document.getElementById('menu-fechar-label');
    const navLinks = document.querySelectorAll('.menu-links a');

    function fecharMenu() {
        if (menuLinks) menuLinks.classList.remove('menu-aberto');
        document.body.style.overflow = '';
    }

    if (menuToggleLabel && menuLinks) {
        menuToggleLabel.addEventListener('click', () => {
            menuLinks.classList.add('menu-aberto');
            document.body.style.overflow = 'hidden';
        });
    }

    if (menuFecharLabel) {
        menuFecharLabel.addEventListener('click', fecharMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', fecharMenu);
    });

    // --- 2. LÓGICA DO SUBMENU (CATEGORIAS) ---
    const toggleSubmenu = document.querySelector('.toggle-submenu');
    const submenu = document.querySelector('.submenu');

    if (toggleSubmenu && submenu) {
        toggleSubmenu.addEventListener('click', (e) => {
            e.stopPropagation();
            submenu.classList.toggle('is-open');
        });

        document.addEventListener('click', (e) => {
            if (!toggleSubmenu.contains(e.target) && !submenu.contains(e.target)) {
                submenu.classList.remove('is-open');
            }
        });
    }

    // --- 3. LÓGICA DOS CARROSSEIS DE CATEGORIAS (COM AS BOLINHAS) ---
    const containers = document.querySelectorAll('.carousel-container');

    containers.forEach(container => {
        const track = container.querySelector('.carousel-track');
        const indicatorsContainer = container.querySelector('.carousel-indicators');
        const items = container.querySelectorAll('.carousel-item');

        if (track && indicatorsContainer && items.length > 0) {
            // Limpa indicadores existentes para não duplicar
            indicatorsContainer.innerHTML = '';

            // Cria as bolinhas (dots)
            items.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                
                // Clique na bolinha leva até a foto
                dot.addEventListener('click', () => {
                    const itemWidth = items[0].offsetWidth;
                    track.scrollTo({ left: itemWidth * i, behavior: 'smooth' });
                });
                
                indicatorsContainer.appendChild(dot);
            });

            // Atualiza a bolinha ativa ao dar scroll
            track.addEventListener('scroll', () => {
                const index = Math.round(track.scrollLeft / track.offsetWidth);
                const dots = indicatorsContainer.querySelectorAll('.dot');
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            });
        }
    });

    // --- 4. LÓGICA DO SLIDER 3D (INDEX) - CORREÇÃO SAFARI ---
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider .item');

    if (slider) {
        const playSlider = () => {
            slider.classList.remove('paused');
            sliderItems.forEach(item => item.classList.remove('active-touch'));
        };

        const pauseSlider = () => {
            slider.classList.add('paused');
        };

        // Touch no Slider (Mobile)
        slider.addEventListener('touchstart', (e) => {
            pauseSlider();
            const targetItem = e.target.closest('.item');
            if (targetItem) {
                sliderItems.forEach(i => i.classList.remove('active-touch'));
                targetItem.classList.add('active-touch');
            }
        }, { passive: true });

        // SOLUÇÃO SAFARI: Retomar ao tocar fora ou dar scroll
        document.addEventListener('touchstart', (e) => {
            if (!slider.contains(e.target)) {
                playSlider();
            }
        }, { passive: true });

        window.addEventListener('scroll', playSlider, { passive: true });

        // Desktop (Mouse)
        slider.addEventListener('mouseenter', pauseSlider);
        slider.addEventListener('mouseleave', playSlider);
    }
});

// --- 3. LÓGICA DO CARROSSEL (VERSÃO REFORÇADA PARA HOSPEDAGEM) ---
function montarBolinhas() {
    const carrosseis = document.querySelectorAll('.carousel-container');
    
    carrosseis.forEach(container => {
        const track = container.querySelector('.carousel-track');
        const indicatorsContainer = container.querySelector('.carousel-indicators');
        const items = container.querySelectorAll('.carousel-item');

        // Só executa se encontrar os elementos e se ainda não houver bolinhas
        if (track && indicatorsContainer && items.length > 0 && indicatorsContainer.children.length === 0) {
            
            items.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.classList.add('indicator');
                if (i === 0) dot.classList.add('active');
                indicatorsContainer.appendChild(dot);
            });

            const dots = indicatorsContainer.querySelectorAll('.indicator');
            track.addEventListener('scroll', () => {
                const index = Math.round(track.scrollLeft / track.offsetWidth);
                dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            });
        }
    });
}

// Tenta rodar assim que o HTML carregar
document.addEventListener('DOMContentLoaded', montarBolinhas);

// Tenta rodar novamente quando as imagens e estilos terminarem de baixar
window.addEventListener('load', montarBolinhas);
