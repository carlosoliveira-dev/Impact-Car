// Obtém referências aos elementos
const menuIcon = document.getElementById('menu-icon');
const menuIconClose = document.getElementById('menu-icon-close');
const menuSearch = document.getElementById('menu-search');
const menuContent = document.getElementById('menu-content');
const menuSearchContent = document.getElementById('menu-search-content');
const menuSearchClose = document.getElementById('menu-search-close');
const menuSearchInput = document.getElementById('search-input');
const header = document.getElementById('header');
const card1Front = document.getElementById('card1-front');
const card1Back = document.getElementById('card1-back');

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

// lógica dos cards informativos
card1Front.addEventListener('click', () => {
    card1Front.classList.remove('animation-fade-in');
    card1Front.classList.remove('animation-fade-out');
    card1Back.classList.remove('animation-fade-in');
    card1Back.classList.remove('animation-fade-out');
    card1Front.classList.add('animation-fade-out');
    setTimeout(() => {
        card1Front.classList.remove('animation-fade-out');
        card1Front.classList.add('hidden');
        card1Back.classList.toggle('animation-fade-in');
        card1Back.classList.remove('hidden');
    }, 500);
});

card1Back.addEventListener('click', () => {
    card1Front.classList.remove('animation-fade-in');
    card1Front.classList.remove('animation-fade-out');
    card1Back.classList.remove('animation-fade-in');
    card1Back.classList.remove('animation-fade-out');
    card1Back.classList.add('animation-fade-out');
    setTimeout(() => {
        card1Back.classList.remove('animation-fade-out');
        card1Back.classList.add('hidden');
        card1Front.classList.toggle('animation-fade-in');
        card1Front.classList.remove('hidden');
    }, 500);
});

// lógica das animações de rolagem de tela
const animationLeftItens = document.querySelectorAll('.animation-trigger-left');

const observerLeftOptions = {
  root: null,
  threshold: 0.2
};

const observerLeftCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-slide-in-from-left');
      observer.unobserve(entry.target);
    }
  });
};

const LeftObserver = new IntersectionObserver(observerLeftCallback, observerLeftOptions);

animationLeftItens.forEach(item => {
  LeftObserver.observe(item);
});

const animationRightItens = document.querySelectorAll('.animation-trigger-right');

const observerRightOptions = {
  root: null,
  threshold: 0.2
};

const observerRightCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-slide-in-from-right');
      observer.unobserve(entry.target);
    }
  });
};

const RightObserver = new IntersectionObserver(observerRightCallback, observerRightOptions);

animationRightItens.forEach(item => {
    RightObserver.observe(item);
});
