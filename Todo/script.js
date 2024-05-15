
function addTodo() {
    let inp = document.getElementById("inp").value
    let btn = document.getElementById("btn")
    let list = document.getElementById("ul").innerHTML+=`<li>${inp}</li>`
}