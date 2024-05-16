function addTodo() {
    let inp = document.getElementById("inp")
    let btn = document.getElementById("btn")
    let list = document.getElementById("ul")
    list.innerHTML+=`<li>${inp.value}</li><button ondblclick="line(this)" onclick="removeList(this)">X</button>`
    inp.value=""
}

function removeList(x) {
    x.previousSibling.remove()
    x.remove()
}

function line(x){
    x.style.textDecoration = "line-through"
}