let inp1= document.getElementById("inp1")
let inp2= document.getElementById("inp2")
let inp3= document.getElementById("inp3")
var obj = document.getElementById('changedDiv');

function change(){
    let width=inp1.value
    let height=inp2.value
    let borderWidth=inp1.value

    obj.style.width=width + 'px';
    obj.style.height=height + 'px';
    obj.style.borderWidth=borderWidth + 'px'
}



function changeBorderStyle(val) {
    obj.style.color=val
}
function changeBorderColor (val) {
    obj.style.borderColor = val;
}
function changeBackgroundColor(val) {
    obj.style.backgroundColor = val;
}
