console.log('Script.js carregado na página:', window.location.pathname);

let carouselsInitialized = false; // Esta variável não é mais estritamente necessária, mas mantive para evitar erros de referência se o HTML ainda a chamar.

document.addEventListener('DOMContentLoaded', (event) => {
    
    // --- Lógica do Menu Hambúrguer ---
    // --- Lógica do Menu Hambúrguer Atualizada ---
const menuToggleLabel = document.getElementById('menu-toggle-label');
const menuLinks = document.querySelector('.menu-links');
const menuFecharLabel = document.getElementById('menu-fechar-label');
const navLinks = document.querySelectorAll('.menu-links a');

// Função para fechar o menu e destravar a tela
function fecharMenu() {
    menuLinks.classList.remove('menu-aberto');
    document.body.style.overflow = ''; // Libera a rolagem
}

if (menuToggleLabel && menuLinks) {
    menuToggleLabel.addEventListener('click', () => {
        menuLinks.classList.add('menu-aberto');
        document.body.style.overflow = 'hidden'; // Trava a rolagem ao abrir
    });
}

if (menuFecharLabel) {
    menuFecharLabel.addEventListener('click', fecharMenu);
}

// Garante que ao clicar em qualquer link (mesmo âncoras), o menu feche e a tela destrave
navLinks.forEach(link => {
    link.addEventListener('click', fecharMenu);
});
// E no fechar:
menuFecharLabel.addEventListener('click', () => {
    menuLinks.classList.remove('menu-aberto');
    document.body.style.overflow = ''; // Libera a rolagem do fundo
});

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

    // A lógica do Carrossel (initializeCarousels, carousels, updateCarousel, etc.) foi removida.
    console.log('Apenas o Menu Hambúrguer está ativo neste script.');

});
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de toggle (incluindo o de CATEGORIAS)
    const toggleButtons = document.querySelectorAll('.toggle-submenu');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // O submenu é o elemento irmão imediato do botão
            const submenu = this.nextElementSibling;
            
            if (submenu && submenu.classList.contains('submenu')) {
                // Alterna a classe 'is-open' no SUBMENU (mostra/esconde a lista)
                submenu.classList.toggle('is-open');
                
                // Alterna a classe 'is-open' no BOTÃO (gira a seta)
                this.classList.toggle('is-open');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    
    if (slider) {
        // Funções de controle
        const iniciarCarrossel = () => {
            slider.classList.remove('paused');
            items.forEach(item => item.classList.remove('active-touch'));
        };

        const pausarCarrossel = () => {
            slider.classList.add('paused');
        };

        // --- EVENTOS PARA MOBILE (iOS/Android) ---
        slider.addEventListener('touchstart', (e) => {
            pausarCarrossel();
            // Identifica qual item foi tocado para destacar
            const targetItem = e.target.closest('.item');
            if (targetItem) {
                items.forEach(i => i.classList.remove('active-touch'));
                targetItem.classList.add('active-touch');
            }
        }, {passive: true});

        // O Safari precisa desse evento no document para "destravar" 
        // quando o usuário toca em qualquer espaço vazio da tela
        document.addEventListener('touchstart', (e) => {
            if (!slider.contains(e.target)) {
                iniciarCarrossel();
            }
        }, {passive: true});

        // Se o usuário arrastar a tela (scroll), o carrossel volta a rodar
        window.addEventListener('scroll', iniciarCarrossel, {passive: true});


        // --- EVENTOS PARA MOUSE (Desktop) ---
        slider.addEventListener('mouseenter', pausarCarrossel);
        slider.addEventListener('mouseleave', iniciarCarrossel);
    }
});
