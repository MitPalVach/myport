window.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        closeBtn = document.querySelector('.menu__close'),
        // daria = document.querySelector('#daria'),
        overlay = document.querySelector('.menu__overlay');


    burger.addEventListener('click', toggleActive);
    closeBtn.addEventListener('click', toggleActive);

    function toggleActive() {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            menu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

// или
    //
    // function openMenu() {
    //     menu.classList.add('active');
    //     document.body.style.overflow = 'hidden';
    // }
    //
    // function closeMenu() {
    //     menu.classList.remove('active');
    //     document.body.style.overflow = '';
    // }

// или

    // burger.addEventListener('click', () => {
    //     menu.classList.add('active');
    //     document.body.style.overflow = 'hidden';
    // });
    //
    // closeBtn.addEventListener('click', () => {
    //     menu.classList.remove('active');
    //     document.body.style.overflow = '';
    // });

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