// Adiciona um listener para o evento DOMContentLoaded, garantindo que o script
// s\u00f3 ser\u00e1 executado depois que o HTML for completamente carregado.
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Seleciona o elemento do \u00edcone do menu (a barra de hamb\u00farguer)
    const menuToggleLabel = document.getElementById('menu-toggle-label');
    
    // Seleciona o container dos links do menu
    const menuLinks = document.querySelector('.menu-links');
    
    // Seleciona o bot\u00e3o de fechar o menu (o 'X')
    const menuFecharLabel = document.getElementById('menu-fechar-label');
    
    // Seleciona todos os links de navega\u00e7\u00e3o dentro do menu
    const navLinks = document.querySelectorAll('.menu-links a');

    // Adiciona um evento de clique no \u00edcone do menu hamb\u00farguer
    menuToggleLabel.addEventListener('click', () => {
        // Adiciona a classe 'menu-aberto' para mostrar o menu
        menuLinks.classList.add('menu-aberto');
    });
    
    // Adiciona um evento de clique no bot\u00e3o de fechar o menu
    menuFecharLabel.addEventListener('click', () => {
        // Remove a classe 'menu-aberto' para esconder o menu
        menuLinks.classList.remove('menu-aberto');
    });
    
    // Adiciona um evento de clique para cada link do menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe 'menu-aberto' para fechar o menu ao clicar em um link
            menuLinks.classList.remove('menu-aberto');
        });
    });
});
