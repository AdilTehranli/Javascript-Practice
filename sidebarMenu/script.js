
let menu = document.querySelector("aside")
let menubar = document.querySelector(".menu-bar")
let closeBar = document.querySelector(".menu-close").addEventListener("click",function(){
   menu.classList.remove("active")
   menubar.classList.remove("d-none")
   document.querySelectorAll("ul li").forEach((x)=>{
    x.children[1].classList.remove("d-none")
    x.children[0].style.transform="scaleX(0)"
   })
})
menubar.addEventListener("click",function (){
    menu.classList.add("active")
    menubar.classList.add("d-none")
    document.querySelectorAll("ul li").forEach((x)=>{
        x.children[1].classList.add("d-none")
        x.children[0].style.transform="scaleX(1)"
    })
})