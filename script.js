// Adiciona um listener para o evento DOMContentLoaded.
// Isso garante que o script só será executado depois que o HTML estiver completamente carregado.
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Seleciona o elemento do input de checkbox com o ID 'menu-toggle'.
    const menuToggle = document.getElementById('menu-toggle');
    
    // Seleciona o elemento que contém os links do menu com a classe 'menu-links'.
    const menuLinks = document.querySelector('.menu-links');
    
    // Seleciona o botão de fechar do menu, que tem a classe 'menu-fechar'.
    const menuFechar = document.querySelector('.menu-fechar');
    
    // Seleciona todos os links de navegação dentro do menu de links.
    const navLinks = document.querySelectorAll('.menu-links a');

    // Adiciona um listener de evento 'change' ao checkbox 'menu-toggle'.
    // Quando o estado do checkbox muda (marcado/desmarcado), esta função é executada.
    menuToggle.addEventListener('change', () => {
        // Se o checkbox estiver marcado (menu aberto), aplica um estilo para exibir o menu.
        if (menuToggle.checked) {
            menuLinks.style.right = '0';
        } else {
            // Se o checkbox estiver desmarcado (menu fechado), esconde o menu.
            menuLinks.style.right = '-250px';
        }
    });

    // Adiciona um listener de evento 'click' ao botão de fechar.
    // Quando clicado, desmarca o checkbox para fechar o menu.
    menuFechar.addEventListener('click', () => {
        menuToggle.checked = false;
        // O evento 'change' acima cuida da transição de estilo.
    });

    // Percorre todos os links de navegação.
    navLinks.forEach(link => {
        // Adiciona um listener de evento 'click' a cada link.
        link.addEventListener('click', () => {
            // Quando um link é clicado, desmarca o checkbox para fechar o menu.
            menuToggle.checked = false;
            // O evento 'change' acima cuida da transição de estilo.
        });
    });
});
