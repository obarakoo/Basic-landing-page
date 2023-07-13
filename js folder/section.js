/// about section on scroll
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2800,
    delay: 500



});

ScrollReveal().reveal('.section .reveal', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.section .box1', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.section .box2', { delay: 500, origin: 'right' });








































/*
window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelector('.reveal');
    for (let i = 0; 1 < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientReact().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');

        } else {
            reveals[i].classList.remove('active');
        }





    }
}
 */