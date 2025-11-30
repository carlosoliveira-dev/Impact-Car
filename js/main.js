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
const card2Front = document.getElementById('card2-front');
const card2Back = document.getElementById('card2-back');
const card3Front = document.getElementById('card3-front');
const card3Back = document.getElementById('card3-back');
const card4Front = document.getElementById('card4-front');
const card4Back = document.getElementById('card4-back');

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
// card 1
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

// card 2
card2Front.addEventListener('click', () => {
    card2Front.classList.remove('animation-fade-in');
    card2Front.classList.remove('animation-fade-out');
    card2Back.classList.remove('animation-fade-in');
    card2Back.classList.remove('animation-fade-out');
    card2Front.classList.add('animation-fade-out');
    setTimeout(() => {
        card2Front.classList.remove('animation-fade-out');
        card2Front.classList.add('hidden');
        card2Back.classList.toggle('animation-fade-in');
        card2Back.classList.remove('hidden');
    }, 500);
});

card2Back.addEventListener('click', () => {
    card2Front.classList.remove('animation-fade-in');
    card2Front.classList.remove('animation-fade-out');
    card2Back.classList.remove('animation-fade-in');
    card2Back.classList.remove('animation-fade-out');
    card2Back.classList.add('animation-fade-out');
    setTimeout(() => {
        card2Back.classList.remove('animation-fade-out');
        card2Back.classList.add('hidden');
        card2Front.classList.toggle('animation-fade-in');
        card2Front.classList.remove('hidden');
    }, 500);
});

// card 3
card3Front.addEventListener('click', () => {
    card3Front.classList.remove('animation-fade-in');
    card3Front.classList.remove('animation-fade-out');
    card3Back.classList.remove('animation-fade-in');
    card3Back.classList.remove('animation-fade-out');
    card3Front.classList.add('animation-fade-out');
    setTimeout(() => {
        card3Front.classList.remove('animation-fade-out');
        card3Front.classList.add('hidden');
        card3Back.classList.toggle('animation-fade-in');
        card3Back.classList.remove('hidden');
    }, 500);
});

card3Back.addEventListener('click', () => {
    card3Front.classList.remove('animation-fade-in');
    card3Front.classList.remove('animation-fade-out');
    card3Back.classList.remove('animation-fade-in');
    card3Back.classList.remove('animation-fade-out');
    card3Back.classList.add('animation-fade-out');
    setTimeout(() => {
        card3Back.classList.remove('animation-fade-out');
        card3Back.classList.add('hidden');
        card3Front.classList.toggle('animation-fade-in');
        card3Front.classList.remove('hidden');
    }, 500);
});

// card 4
card4Front.addEventListener('click', () => {
    card4Front.classList.remove('animation-fade-in');
    card4Front.classList.remove('animation-fade-out');
    card4Back.classList.remove('animation-fade-in');
    card4Back.classList.remove('animation-fade-out');
    card4Front.classList.add('animation-fade-out');
    setTimeout(() => {
        card4Front.classList.remove('animation-fade-out');
        card4Front.classList.add('hidden');
        card4Back.classList.toggle('animation-fade-in');
        card4Back.classList.remove('hidden');
    }, 500);
});

card4Back.addEventListener('click', () => {
    card4Front.classList.remove('animation-fade-in');
    card4Front.classList.remove('animation-fade-out');
    card4Back.classList.remove('animation-fade-in');
    card4Back.classList.remove('animation-fade-out');
    card4Back.classList.add('animation-fade-out');
    setTimeout(() => {
        card4Back.classList.remove('animation-fade-out');
        card4Back.classList.add('hidden');
        card4Front.classList.toggle('animation-fade-in');
        card4Front.classList.remove('hidden');
    }, 500);
});

// lógica das animações de rolagem de tela
const animationLeftItens = document.querySelectorAll('.animation-trigger-left');

const observerLeftOptions = {
  root: null,
  threshold: 0.1
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
  threshold: 0.1
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
