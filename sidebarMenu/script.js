
let menu = document.querySelector("aside")
let menubar = document.querySelector(".menu-bar")
let closeBar = document.querySelector(".menu-close").addEventListener("click",function(){
   menu.classList.remove("active")
   menubar.classList.remove("d-none")
})
menubar.addEventListener("click",function (){
    menu.classList.add("active")
    menubar.classList.add("d-none")
})