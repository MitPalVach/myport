window.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        closeBtn = document.querySelector('.menu__close'),
        overlay = document.querySelector('.menu__overlay');

    burger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', () => {
        menu.classList.toggle('active');
        document.body.style.overflow = '';
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && menu.classList.contains('active')) {
            menu.classList.toggle('active');
        }
        document.body.style.overflow = '';
    });
});