const links = document.querySelectorAll('.menu__item');

const currentPage = window.location.pathname.split('/').pop();

links.forEach(link => {

    const linkPage = link.getAttribute('href').split('/').pop();

    if (linkPage === currentPage) {
        link.classList.add('menu__item--active');
    }
});
