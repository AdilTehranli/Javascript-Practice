function buttonKal(x) {
    displayInput.value+=x.innerText
}
function equal(){
    let result = 0;
    if(displayInput.value.includes("+")){
    let deyer = displayInput.value.split('+')
    for(let i =0;i<deyer.length;i++){
        result+=(+deyer[i])
    }
    }else if(displayInput.value.includes("-")){
        let deyer = displayInput.value.split('-')
        result=(+deyer[0])
        for(let i =1;i<deyer.length;i++){
            result-=(+deyer[i])
        }
    }else if(displayInput.value.includes('/')){
        let deyer = displayInput.value.split('/')
      result=(+deyer[0])/(+deyer[1])
    }else if(displayInput.value.includes('*')){
        let deyer = displayInput.value.split('*')
      result=(+deyer[0])*(+deyer[1])
    }
    displayInput.value=result
}

function sil(){
    displayInput.value=" "
}

function singleDel(x){
    displayInput.value=displayInput.value.slice(0,-1)
}