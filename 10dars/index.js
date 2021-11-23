// "use strict" or 'use strict'


// Nullish Coalescing Operator "??"


// This was recently added to Javascript
// and if you want to use it in older
// browsers you need to use polyfill



/*

1. Objects => https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
2. Objects inheritance => https://javascript.info/prototype-inheritance
3. this => https://javascript.info/object-methods
4. new => https://javascript.info/constructor-new

 */

// In oredr to get all the methods of the Object we can use Object.getOwnPropertyNames()


getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')

// let str = 'JS will, JS will rock you!';
// let newStr = str.replace('JS',(n) => console.log(n));
//
// console.log(newStr);
//
// console.log(str)


const obj = getMethods(Object)
// console.log(obj)

/*
assign
getOwnPropertyDescriptor
getOwnPropertyDescriptors
getOwnPropertyNames
getOwnPropertySymbols
is
preventExtensions
seal
create
defineProperties
defineProperty
freeze
getPrototypeOf
setPrototypeOf
isExtensible
isFrozen
isSealed
keys
entries
fromEntries
values
hasOwn
*/


// const newObj = Object.assign(new Object, [1,2,3,45])

// const newObj2 = Object.assign(new Object, {name: 'John'}, );

// console.log(newObj);
// console.log(newObj2);
const object1 = {  
  property1: 42  
}  
const object2 = {  
  property2: 42 
}  

const object3 = object2
const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');  
const descriptor2 = Object.getOwnPropertyDescriptor(object2, 'property2');  
console.log(descriptor1);  
console.log(descriptor2.enumerable);  
console.log(descriptor1.value);  
console.log(descriptor2.value);  

console.log(Object.is(object3, object2))