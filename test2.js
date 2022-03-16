const header_sticky = document.querySelector('.header-sticky');
const icon = document.querySelectorAll('.menuActive');
const backToTop = document.querySelector('.backToTop');

backToTop.addEventListener("click",scroll);
function scroll(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const box_margin = document.querySelectorAll('.box-margin');
const box = document.querySelectorAll('.box');

box_margin[5].style.marginTop = `${box[2].clientHeight - box_margin[2].clientHeight}px`
box_margin[6].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
box_margin[8].style.marginTop = `${box[5].clientHeight - box_margin[5].clientHeight}px`

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        backToTop.classList.add('active_back');
    }
    else{backToTop.classList.remove('active_back');}
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        header_sticky.classList.add("active")
    } else {
        header_sticky.classList.remove("active")
    }   
}
icon.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('active-icon')
    })
})

window.addEventListener('resize', reportWindowSize);

function reportWindowSize(){
    const box_margin = document.querySelectorAll('.box-margin');
    const box = document.querySelectorAll('.box');
    
    box_margin[5].style.marginTop = `${box[2].clientHeight - box_margin[2].clientHeight}px`
    box_margin[6].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
    box_margin[8].style.marginTop = `${box[5].clientHeight - box_margin[5].clientHeight}px`

    if( box_margin[5].style.marginTop === "0px"){
        box_margin[5].style.marginTop = `${box[3].clientHeight - box_margin[3].clientHeight}px`
    }
}

