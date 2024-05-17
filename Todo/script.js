function addTodo() {
    let inp = document.getElementById("inp")
    let btn = document.getElementById("btn")
    let list = document.getElementById("ul")
    list.innerHTML+=`<li>${inp.value}<button ondblclick="removeList(this)" onclick="line(this)">X</button></li>`
    inp.value=""
}

function removeList(x) {
    x.parentElement.remove()

}

function line(x){
    x.parentElement.style.textDecoration = "line-through"
}