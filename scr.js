//nav transparent
$(function(){
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

});


//dark mode and light mode
const darkMode = document.getElementById('dark-mode')
const lightMode = document.getElementById('light-mode')

darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')
})

lightMode.addEventListener('click', () =>{
    document.body.classList.remove('dark-mode')
    lightMode.classList.toggle('hide')
    darkMode.classList.remove('hide')
})

var menu = document.getElementById("bar");
var items = document.getElementById("navbar");

items.style.right = "-360px";

menu.onclick = function(){
 if (items.style.right == "-360px") {
  items.style.right = "0";
 }
 else{
  items.style.right = "-360px";
 }
}


//Função scroll
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('showscroll');
}
window.addEventListener('scoll', scrollUp)
