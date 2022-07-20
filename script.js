let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let videoBtn = document.querySelectorAll('.vid-btn')


window.onscroll =() =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}
searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
   

});
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

formBtn.addEventListener('click', () =>{
    
    loginForm.classList.add('active');

});
formClose.addEventListener('click', () =>{
    
    loginForm.classList.remove('active');

});
videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        document.querySelector('.contorls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
var swiper = new Swiper(".review-slider",{
    spaceBetween:20,
    loop:true,
    autoplay : {
        delay:2500,
        disableOnInteraction:false,

    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
         1024:{
            slidesPerView:3,
        },
    },
 
});
var swiper = new Swiper(".braand-slider",{
    spaceBetween:20,
    loop:true,
    autoplay : {
        delay:2500,
        disableOnInteraction:false,

    },
    breakpoints:{
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
            
            
        991: {slidesPerView: 4,
        },
           
         1024:{
            slidesPerView: 5,
        },
    },
 
 
});
mybutton =document.getElementById('myBtn');
window.onscroll = function () {scrollFunction()};
function scrollFunction (){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mybutton.style.display ="block";

  }else {
    mybutton.style.display = "none";
  }
}
function topFunction (){
  document.body.scrollTop =0;
  document.documentElement.scrollTop=0;
};
