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
