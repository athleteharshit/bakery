// const open_ham = document.querySelector('.hamburger-menu');
// const bars = document.querySelector('.fa-bars');
// const times = document.querySelector('.fa-times');

// console.log(open_ham)
// open_ham.addEventListener('click', ()=> {
//     bars.classList.toggle('open');
//     times.classList.toggle('open');
// });
 

$(function () {
    $('.hamburger-menu').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
});