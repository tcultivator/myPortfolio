

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