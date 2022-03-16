const header_sticky = document.querySelector('.header-sticky');
const icon = document.querySelectorAll('.menuActive');
const backToTop = document.querySelector('.backToTop');

// const sorting = document.querySelector('.sorting');
// const select_sorting = document.querySelector('.select-sorting');
// sorting.addEventListener("click",()=>{
//     select_sorting.classList.toggle('active_sort')
// })

backToTop.addEventListener("click",scroll);
function scroll(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        backToTop.classList.add('active_back');
    }
    else{backToTop.classList.remove('active_back');}
}
// icon.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         item.classList.toggle('active-icon')
//     })
// })
// let min = 10;
// let max = 50;

// const calcLeftPosition = value => 100 / (50 - 10) *  (value - 10);

// $('#rangeMin').on('input', function(e) {
//   const newValue = parseInt(e.target.value);
//   if (newValue > max) return;
//   min = newValue;
//   $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
//   $('#min').html('Price : $'+newValue + " -");
//   $('#line').css({
//     'left': calcLeftPosition(newValue) + '%',
//     'right': (100 - calcLeftPosition(max)) + '%'
//   });
  
// });

// $('#rangeMax').on('input', function(e) {
//   const newValue = parseInt(e.target.value);
//   if (newValue < min) return;
//   max = newValue;
//   $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
//   $('#max').html('$'+newValue);
//   $('#line').css({
//     'left': calcLeftPosition(min) + '%',
//     'right': (100 - calcLeftPosition(newValue)) + '%'
//   });
// });
