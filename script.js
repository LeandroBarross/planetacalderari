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
            toggleSubmenu.classList.toggle('is-open');
        });

        document.addEventListener('click', (e) => {
            if (!toggleSubmenu.contains(e.target) && !submenu.contains(e.target)) {
                submenu.classList.remove('is-open');
            }
        });
    }

    // --- 3. NOVA LÓGICA DE PAUSA PARA OS SLIDERS (FEEDBACK E OUTROS) ---
    // Usamos querySelectorAll para garantir que todos os sliders da página funcionem
    const allSliders = document.querySelectorAll('.slider');

    allSliders.forEach(slider => {
        
        const playSlider = () => {
            slider.classList.remove('paused');
        };

        const pauseSlider = () => {
            slider.classList.add('paused');
        };

        // Pausa quando o rato entra (Desktop)
        slider.addEventListener('mouseenter', pauseSlider);
        
        // Retoma quando o rato sai (Desktop)
        slider.addEventListener('mouseleave', playSlider);

        // Pausa no toque (Telemóvel/Tablet)
        slider.addEventListener('touchstart', (e) => {
            pauseSlider();
        }, { passive: true });

        // Retoma após o toque (com um delay de 3 segundos para leitura)
        slider.addEventListener('touchend', () => {
            setTimeout(playSlider, 3000);
        }, { passive: true });
    });

    // --- 4. LÓGICA DO CARROSSEL DE BOLINHAS (INDICADORES) ---
    montarBolinhas();
});

function montarBolinhas() {
    const carrosseis = document.querySelectorAll('.carousel-container');
    
    carrosseis.forEach(container => {
        const track = container.querySelector('.carousel-track');
        const indicatorsContainer = container.querySelector('.carousel-indicators');
        const items = container.querySelectorAll('.carousel-item');

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

// Garante que as bolinhas funcionem mesmo se o carregamento for lento
window.addEventListener('load', montarBolinhas);

