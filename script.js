document.addEventListener('DOMContentLoaded', () => {
    const arrowImg = document.getElementById('arrow-img');
    const floatingArrow = document.getElementById('floating-arrow');
    const headerHeight = document.getElementById('header').offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            arrowImg.classList.remove('up');
            arrowImg.classList.add('down');
        } else {
            arrowImg.classList.remove('down');
            arrowImg.classList.add('up');
        }
    });

    floatingArrow.addEventListener('click', () => {
        if (arrowImg.classList.contains('up')) {
            document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
        } else {
            document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
        }
    });
});