let element = document.querySelectorAll(".img");
let mainimg =document.querySelector(".main_img")
let imgTag = document.querySelector("img")
var photos = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMFqYvzSSet_VOKrJgE_9RZ2IJrOSX77FtMhzNRZ-Wg&s","https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"]
var count =0;
function next() {
    count++;
    if(count >= photos[count]){
        count=0
        imgTag.src=photos[count]
    }else{
        imgTag.src=photos[count]
    }
}
function prev() {
    count--;
    if(count <= photos[count]){
        count=photos.length-1
        imgTag.src=photos[count]
    }else{
        imgTag.src=photos[count]
    }
}
element.forEach(element=>{
    element.addEventListener("click", function (){
        mainimg.children[1].src=this.children[0].src
    })
})
