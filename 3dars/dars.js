const data =[['a',1],['b',2]];

function arrayToObj  (data) {
    let result = {}
    for (let i of data){
        result[i[0]] = i[1]
    }
    return result
}

console.log(arrayToObj(data))