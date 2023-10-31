const btn = document.querySelector('#menu-sanduba');
const menu = document.querySelector('.bott-mobile');

btn.addEventListener('click', function() {
    if(menu.style.display === 'flex'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});