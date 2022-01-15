const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const nav1 = document.querySelector('#nav-1');
const nav2 = document.querySelector('#nav-2');
const nav3 = document.querySelector('#nav-3');
const nav4 = document.querySelector('#nav-4');
const nav5 = document.querySelector('#nav-5');

function toggleNav() {
    //Toggle: menu bars open/closed
    menuBars.classList.toggle('change');
    //Toggle: menu active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        //Animate in-overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
    } else {
        //Animate out-overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}

//Event listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);