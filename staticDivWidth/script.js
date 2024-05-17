    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");
    let inp3 = document.getElementById("inp3");
    let changeDiv= document.getElementById("changeDiv");

    function change() {
        let widht =+inp1.value
        let height= inp2.value
        let borderWidth=inp3.value
        if(parseInt(changeDiv.style.width) <= inp1.value){
            console.log("kicikdir");
        }else{
            changeDiv.style.width = parseInt(changeDiv.style.width) + widht + "px"
        }
        changeDiv.style.height=height + "px"
        changeDiv.style.borderWidth=borderWidth + "px"


    }
