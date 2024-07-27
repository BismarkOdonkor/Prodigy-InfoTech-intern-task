// script.js

document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navMenu.style.backgroundColor = '#555';
        } else {
            navMenu.style.backgroundColor = '#333';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            link.style.color = '#ff0';
        });

        link.addEventListener('mouseleave', function () {
            link.style.color = '#fff';
        });
    });
});
