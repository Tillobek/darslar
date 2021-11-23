let password = 'salomScha'

function passwordSymbolCheck (element){
    let i = 0;
    while(element.length != i){
        if (element[i].toUpperCase()){
            return true
        }else{
            i++;
        }
    }
    return false
}


console.log(passwordSymbolCheck(password))

// console.log(!isNaN('s'))