let element = document.querySelectorAll(".img");
let mainimg =document.querySelector(".main_img")
element.forEach(element=>{
    element.addEventListener("click", function (){
        mainimg.children[1].src=this.children[0].src
    })
})