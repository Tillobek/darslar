// Задача 2.
// Написать функцию, которая проверит, является ли строка палидромом.
// Палидром - текст, одинаково читающееся в обоих направлениях.

function isPolidrom(str) {
    return str === str.split('').reverse().join('')
};




const result = isPolidrom('121')

// console.log(result);

// 1 misol
// const arr = [];
// const arr2 = new Array(9).fill(1);
// console.log(arr2.length);


function addElements(arr, firstThreeElemnts, lastThereeElements) {
    arr.push(...lastThereeElements);
    arr.unshift(...firstThreeElemnts)
    return arr;
}

// const res = addElements(arr, [1,2,3], [7,8,9]);

// console.log(res);


const arr = [1,2,4,5,6,5,3];
function getThreeElements(arr){
    const center = Math.round(arr.length/2)-1;

    const result = arr.slice(center-1, center+2);
    console.log(result);
    console.log(arr);
    return result;
}
// console.log(arr);
// getThreeElements(arr)


// function getUniqueValues(arr) {
//     const unique = new Set(arr);
//     const res = [...unique]
//     console.log(res);
//     return res
// }

// getUniqueValues(arr)


// function concat(arr1, arr2) {
//     return arr1.concat(arr2)
// }

// function concat(arr1, arr2) {
//     return [...arr1, ...arr2];
// }


const arr1 = [1,3,5,4];

const arr2 = [1,6,8,9];

[1];

// function getIntersection(arr1, arr2) {
//     return arr1.filter(n => arr2.indexOf(n) !== -1);
// }

// const result1 = getIntersection(arr1, arr2)

// console.log(result1);


function convertArrayToObject(arr){
    return Object.assign({}, arr);
}
const array2 = [
    {name: 'John'},
    true,
    1,
    3,
    'hello'
]
const answer = convertArrayToObject(array2)
console.log(answer);




