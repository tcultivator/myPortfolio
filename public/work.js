

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

    if (document.documentElement.scrollTop > 2000) {
        btn.style.bottom = '20px';
        btn.style.opacity = '1';        
        
    } else {
        btn.style.bottom = '-60px';      
        btn.style.opacity = '0';         
        
    }
};


document.getElementById('homeBtn').addEventListener('click',()=>{
    window.location.replace('index.html')
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
        document.getElementById('navControl').style.bottom ='0',
        document.getElementById('navControl').style.opacity ='1'

    ) : (

        line1.style.transform = 'rotate(0deg)',
        line2.style.transform = 'rotate(0deg)',
        line1.style.position = 'relative',
        line2.style.position = 'relative',
        document.getElementById('navControl').style.bottom ='-100%',
        document.getElementById('navControl').style.opacity ='.5'

    )

})
