const btn = document.querySelector('#menu-sanduba');
const menuMobile = document.querySelector('.bott-mobile');
const menuDesktop = document.querySelector('.bott')

btn.addEventListener('click', function() {
    if(menuMobile.style.display === 'flex'){
        menuMobile.style.display = 'none';
    } else {
        menuMobile.style.display = 'flex';
    }
});