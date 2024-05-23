
let inp= document.querySelector("#text-inp")
let list1=document.querySelector("#list-1")
let list2=document.querySelector("#list-2")
let list3=document.querySelector("#list-3")
addBtn.addEventListener("click",function(){
list1.innerHTML+=`<li onclick="MoveList(this)" >${inp.value}</li>`
inp.value=""

})

let chooseList;
function MoveList(x) {
    document.querySelectorAll("ul li").forEach(y=>{
    y.style.backgroundColor=""
    })
    x.style.backgroundColor="green"
    chooseList=x
}

function right1(){
    list2.append(chooseList)
    chooseList.style.backgroundColor=""
}
function left1(){
    list1.append(chooseList)
    chooseList.style.backgroundColor=""
}
function right2(){
    list3.append(chooseList)
    chooseList.style.backgroundColor=""
}
function left2() {
    list2.append(chooseList)
    chooseList.style.backgroundColor=""
}