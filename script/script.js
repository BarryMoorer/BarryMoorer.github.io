"use strict";
//$(document).ready(function() {
 const menuButton = document.getElementsByClassName("mobile-menu")[0]
const menuList = document.getElementsByClassName('menu-bar')[0]

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active')
    console.log('this one is working')
})

 //  $("#mobile-menu").click(
      //  function () {
    //    $(".menu-bar").css("display", "none")
  //      $(this).toggleClass("active");
    
   // var menuList = document.querySelector(".menu_horizontal");

   // menuList.classList.add(":active");
    
   // console.log('button clicked!')

//})

//})



/*
function menuClickHandler() {
    $(".menu-bar").css("display", "none")
    $(this).toggleClass("active");
}*/