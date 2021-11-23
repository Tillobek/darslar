'use strict'
// let c;
// c = 'hello'
//
//
// const descr = Object.getOwnPropertyDescriptor(obj, id);
// descr.writable = false; // < = 1
// // descr.enumerable = false;
//
// // const descr = {
// //
// // }
// //
// // Object.defineProperty(obj, 'name', descr)
// // Object.defineProperties(obj, {
// //     name: descr,
// //     age: descr
// // })
//
// Object.defineProperty(obj, id, descr)
//
// obj[id] = 5
// console.log(obj)




const id = Symbol();
const obj = {
    name: 'John', // uzgarmas qilish kerak
    age: 35,
    address: 'Chilonzor',
    [id]: 1
}

const nameDescr = {
    writable: false
}

const ageDescr = {
    configurable: false
}

const addressDescr = {
    enumerable: false
}

const idDescriptor = {
    writable: false,
    configurable: false
}
console.log(obj)
Object.defineProperties(obj, {
    name: nameDescr,
    age: ageDescr,
    address: addressDescr,
    [id]: idDescriptor
})
// obj.name = 'Alex'
// delete obj.age
// obj[id] = 2
// console.log(obj)













