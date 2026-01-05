// 1. Smooth Scroll Fade-in
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        }else{
            entry.target.classList.add('hidden');
            entry.target.classList.remove('show')
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// 2. Back to Top Button
const backToTop = document.getElementById('backtoTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const mobileNav = document.getElementById('mobileNav');
const navControl = document.getElementById('navControl');

mobileNav.addEventListener('click', () => {
    // Toggle the 'open' class for the hamburger animation
    mobileNav.classList.toggle('open');
    
    // Toggle the 'active' class to slide the menu in
    navControl.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('#navControl a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        navControl.classList.remove('active');
    });
});