const numbers = [1,2,3,4,5,6,7,8];
const mapped = numbers.map((value, idnex) => {
    return value*5;
})

// console.log(numbers, 'uzgarmadi');

// console.log(mapped, 'uzgardi');

const arr = [];

const foreach = numbers.forEach((value) => {
    arr.push(value)
    return value;
})

console.log(arr);
console.log(foreach);


// reduce

const num = numbers.reduce((accumulator, currentValue) => {
    
})

console.log(num);