// Obtém referências aos elementos
const menuIcon = document.getElementById('menu-icon');
const menuIconClose = document.getElementById('menu-icon-close');
const menuContent = document.getElementById('menu-content');
const header = document.getElementById('header');

// Adiciona um "ouvinte" de evento de clique
menuIcon.addEventListener('click', () => {
    // Alterna a classe 'hidden' no elemento alvo
    menuContent.classList.toggle('hidden');
    header.classList.toggle('hidden');
    // Você pode alternar outras classes aqui, como 'flex' ou 'block'
});

// Adiciona um "ouvinte" de evento de clique
menuIconClose.addEventListener('click', () => {
    // Alterna a classe 'hidden' no elemento alvo
    menuContent.classList.toggle('hidden');
    header.classList.toggle('hidden');
    // Você pode alternar outras classes aqui, como 'flex' ou 'block'
});