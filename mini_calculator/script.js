function calculate(x) {
    let result = 0;
    let inp1 =+ document.getElementById("firstinp").value;
    let inp2 =+ document.getElementById("secondinp").value;
    if (x.innerText == "+") {
        result = inp1 + inp2;
    } else if (x.innerHTML == "-") {
        result = inp1 - inp2;
    } else if (x.innerText == "*") {
        result = inp1 * inp2;
    } else if (x.innerText == "/") {
        result = inp1 / inp2;
    }

    document.querySelector("span").innerHTML = result;
}