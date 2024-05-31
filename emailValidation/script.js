function validate() {
    let mail=document.getElementById("text").value

    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/

    if(regx.test(mail)){
        alert("Validate true")
        return true
    }
    else{
        alert("Validate false")
        return false
    }
}