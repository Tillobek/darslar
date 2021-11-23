const data = [1,2,3,4,1,2,1,3,5,2];

function without (arr,num1,num2){
    let result = []
    for (let i of arr){
        if (i !== num1 && i !== num2){
            result.push(i)
        }
    }
    return result
}

console.log(without(data));