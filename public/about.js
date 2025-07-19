



const descriptValue = document.getElementById('descriptValue');

document.addEventListener('click', (e) => {
    console.log(e.target.id)
    switch (e.target.id) {
        case 'html':
            descriptValue.textContent = `HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It defines elements like headings, paragraphs, links, images, and more to build the layout of web pages.`
            break;
        case 'css':
            descriptValue.textContent = `CSS (Cascading Style Sheets) is a language used to style and design the layout of web pages. It controls how HTML elements are displayed — including colors, fonts, spacing, positioning, animations, and responsiveness — to create visually appealing and user-friendly websites.`
            break;

        case 'js':
            descriptValue.textContent = `JavaScript (JS) is a high-level, dynamic, and multi-paradigm programming language primarily known for its role in web development. It is one of the three core technologies of the World Wide Web, alongside HTML and CSS.`
            break;

        case 'react':
            descriptValue.textContent = `React is a JavaScript library for building fast and interactive user interfaces. Developed by Facebook, it allows developers to create reusable components and efficiently update the UI based on data changes, making it ideal for modern web applications.`
            break;

        case 'nodejs':
            descriptValue.textContent = `Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows developers to run JavaScript on the server side. It's used to build fast, scalable backend applications like APIs, web servers, and real-time services.`
            break;

        case 'mysql':
            descriptValue.textContent = `MySQL is a popular open-source relational database management system used to store, organize, and manage structured data. It’s widely used in web applications to handle data through SQL (Structured Query Language).`
            break;


        default:
            break;
    }
})





const gototop = document.getElementById('gototop')

gototop.addEventListener('click', () => {
    console.log('zxczxczxczxcxzc')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


window.onscroll = function () {
    const btn = document.getElementById('gototop');

    if (document.documentElement.scrollTop > 200) {
        btn.style.bottom = '20px';
        btn.style.opacity = '1';

    } else {
        btn.style.bottom = '-60px';
        btn.style.opacity = '0';

    }
};



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




document.getElementById('homeBtn').addEventListener('click',()=>{
    window.location.replace('../index.html')
    console.log('')
})




const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
let navToggle = false;
document.getElementById('mobileNav').addEventListener('click', () => {
    navToggle = !navToggle
    console.log('zxc')
    navToggle ? (
        line1.style.position = 'absolute',
        line2.style.position = 'absolute',
        line1.style.transform = 'rotate(315deg)',
        line2.style.transform = 'rotate(225deg)',
        document.getElementById('navControl').style.bottom = '0',
        document.getElementById('navControl').style.opacity = '1'

    ) : (

        line1.style.transform = 'rotate(0deg)',
        line2.style.transform = 'rotate(0deg)',
        line1.style.position = 'relative',
        line2.style.position = 'relative',
        document.getElementById('navControl').style.bottom = '-100%',
        document.getElementById('navControl').style.opacity = '.5'

    )

})

