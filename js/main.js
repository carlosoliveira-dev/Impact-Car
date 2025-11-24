// Obtém referências aos elementos
const menuIcon = document.getElementById('menu-icon');
const menuIconClose = document.getElementById('menu-icon-close');
const menuSearch = document.getElementById('menu-search');
const menuContent = document.getElementById('menu-content');
const menuSearchContent = document.getElementById('menu-search-content');
const menuSearchClose = document.getElementById('menu-search-close');
const menuSearchInput = document.getElementById('search-input');
const header = document.getElementById('header');

// lógica do menu lateral
menuIcon.addEventListener('click', () => {
    menuContent.classList.toggle('hidden');
    menuContent.classList.toggle('menu-open');
    
    setTimeout(() => {
        menuContent.classList.remove('menu-open');
    }, 300);
});

menuIconClose.addEventListener('click', () => {
    menuContent.classList.toggle('menu-close');
    setTimeout(() => {
        menuContent.classList.toggle('hidden');
        menuContent.classList.remove('menu-close');

    }, 300);
});

// lógica do menu de busca
menuSearch.addEventListener('click', () => {
    menuSearchContent.classList.toggle('hidden');
    menuSearchContent.classList.toggle('search-open');
    menuSearchInput.focus();
    setTimeout(() => {
        menuSearchContent.classList.remove('search-open');
    }, 300);
});

menuSearchClose.addEventListener('click', () => {
    menuSearchContent.classList.toggle('search-close');
    setTimeout(() => {
        menuSearchContent.classList.toggle('hidden');
        menuSearchContent.classList.remove('search-close');
    }, 300);
});
