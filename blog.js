const header_sticky = document.querySelector('.header-sticky');
const icon = document.querySelectorAll('.menuActive');
const backToTop = document.querySelector('.backToTop');

backToTop.addEventListener("click", scroll);

function scroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        backToTop.classList.add('active_back');
    } else { backToTop.classList.remove('active_back'); }
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        header_sticky.classList.add("active")
    } else {
        header_sticky.classList.remove("active")
    }
}
icon.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active-icon')
    })
})

const box_margin = document.querySelectorAll('.box-margin');
const box = document.querySelectorAll('.box');

if (768 < window.innerWidth <= 991) {
    box_margin[7].setAttribute('style', `margin-top : ${box[5].clientHeight - box_margin[5].clientHeight}px`)
}

window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
    if (768 < window.innerWidth <= 991) {
        box_margin[7].setAttribute('style', `margin-top : ${box[5].clientHeight - box_margin[5].clientHeight}px`)
    }
}
