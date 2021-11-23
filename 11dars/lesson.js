'use strict'
// Symbol Type
// Symbols are unique even your give them the same parameter
// Object property configuration
// Prototypes, inheritances

// const symb1 = Symbol()

// console.log(typeof Symbol)



// obj.id = 'id has changed'
// obj[id] = 'Symbol ID'
// const name = Symbol();
// obj[name] = 'Alex'
// console.log(obj[id])
// console.log(obj[name])

//Symbols
// const symb1 = Symbol('symbol1');
// const symb2 = Symbol('symbol1');

// console.log(symb1 === symb2)

// console.log(symb1.toString())
// console.log(symb1.description)
const id = Symbol('name');

// const obj = {
//     id: 'as132sfd',
//     name: 'John',
//     [id]: 'this is ID of obj'
// }
// console.log(obj[id])
// console.log(obj[id])
// for (let key in obj) {
//     console.log(key)
// }

// const symb3 = Symbol
const getMethods = (obj) => Object.getOwnPropertyNames(obj).filter((key) => typeof obj[key] === 'function')

const methods = getMethods(Symbol);
// console.log(methods)



const symb2 = Symbol.for('id');
const symb1 = Symbol.for('id');

// console.log(symb2);

// Object property configuration
const obj = {
    name: 'John', // uzgarmas qilish kerak
    age: 35
}


const descr = Object.getOwnPropertyDescriptor(obj, 'name');
descr.writable = false; // < = 1

console.log(descr)


const descriptor = { // < = 2
    writable: false,
    configurable: false,
    enumerable: false
}

for (let objKey in obj) {
    console.log(objKey)
}



const person = {
    name: 'Person Name',
    age: 35,
    address: 'Chilonzor'
};

const personDescriptor = Object.getOwnPropertyDescriptors(person);
console.log(personDescriptor)

Object.defineProperties(person, {
    name: descriptor,
    age: descriptor,
    address: descriptor
})

// person.age = 65

Object.defineProperty(person, 'name', descriptor)


// delete person.name

// console.log(descr)
// console.log(person)


