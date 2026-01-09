const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('show')
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));



window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

function smoothScrollToTop() {
    const startPos = window.pageYOffset || document.documentElement.scrollTop;
    const duration = 1000;
    let startTime = null;


    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function animationLoop(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const easedProgress = easeOutCubic(progress);

        window.scrollTo(0, startPos * (1 - easedProgress));

        if (timeElapsed < duration) {
            requestAnimationFrame(animationLoop);
        }
    }

    requestAnimationFrame(animationLoop);
}

const backToTop = document.getElementById('backtoTop');

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollToTop();
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