const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});









































