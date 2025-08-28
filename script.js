// Adiciona um listener para o evento DOMContentLoaded.
// Isso garante que o script só será executado depois que o HTML estiver completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do menu usando seus IDs
    const menuToggle = document.getElementById('menu-toggle-label');
    const menuContainer = document.getElementById('menu-links-container');
    const menuFechar = document.getElementById('menu-fechar-label');
    const navLinks = document.querySelectorAll('.menu-links a');

    // Função para abrir o menu
    function openMenu() {
        menuContainer.classList.add('menu-aberto');
    }

    // Função para fechar o menu
    function closeMenu() {
        menuContainer.classList.remove('menu-aberto');
    }

    // Abre o menu ao clicar no ícone de hambúrguer
    menuToggle.addEventListener('click', openMenu);

    // Fecha o menu ao clicar no ícone 'X'
    menuFechar.addEventListener('click', closeMenu);

    // Fecha o menu ao clicar em qualquer link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
