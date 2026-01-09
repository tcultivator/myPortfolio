





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('show')
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));



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



// image slider

let index = 1
const imageForSlider = document.getElementById('imageForSlider')
const icons = document.querySelectorAll('#imgControl i');

document.getElementById('img1').classList.add('active')

document.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'img1':
            imageForSlider.src = '/myPortfolio/assets/CapstonePic.png'
            icons.forEach(element => {
                element.classList.remove('active')
            })
            e.target.classList.add('active')
            index = 1
            break;
        case 'img2':
            imageForSlider.src = '/myPortfolio/assets/img2.png'
            icons.forEach(element => {
                element.classList.remove('active')
            })
            e.target.classList.add('active')
            index = 2
            break;
        case 'img3':
            imageForSlider.src = '/myPortfolio/assets/img3.png'
            icons.forEach(element => {
                element.classList.remove('active')
            })
            e.target.classList.add('active')
            index = 3
            break;
        case 'img4':
            imageForSlider.src = '/myPortfolio/assets/img4.png'
            icons.forEach(element => {
                element.classList.remove('active')
            })
            e.target.classList.add('active')
            index = 4

            break;
        case 'img5':
            imageForSlider.src = '/myPortfolio/assets/img5.png'
            icons.forEach(element => {
                element.classList.remove('active')
            })
            e.target.classList.add('active')
            index = 5

            break;
        case 'img6':
            imageForSlider.src = '/myPortfolio/assets/img6.png'
            icons.forEach(element => {
                element.classList.remove('active')
            })
            e.target.classList.add('active')
            index = 6

            break;

        default:
            break;
    }
})

setInterval(() => {
    index++
    if (index >= 7) {
        index = 1
    }
    document.getElementById(`img${index}`).click()
}, 4000);




document.getElementById('homeBtn').addEventListener('click', () => {
    window.location.replace('../index.html')
    console.log('')
})




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

