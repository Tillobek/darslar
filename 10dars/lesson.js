// "use strict"
// c = 'hello';

// console.log(c);

//  Contructor functions

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const num = new Person('John', 35);
/*
1. {}, new Object()
2. this = {};
3. return {};
*/
// console.log(num);


// Fuctory functions 
function createPerson(name, age){
    return {
        name,
        age
    }
}

// const person2 = createPerson('Alex', 35);
// console.log(person2);

// function getthis(){
//     console.log(this);
//     return this === obj
// }
const obj = {
    name: 'Alex',
    age: 25,
    getName: function() {
        return obj;
    },
    getAge() {
        getthis()

        return obj.age;
    },
    checkThis(){
        return obj === this;
    },
    getThis(arr) {
        // console.log(this);
        const arrowFunction = () => {
            console.log('This---> ', this);
        }
        arrowFunction()
        // return this
    }
}

// const arrowFunc = () => {
//     console.log(this);
// }
// arrowFunc();
// console.log(obj.getThis([1,2]));


const getObjMethods = (obj) => Object.getOwnPropertyNames(obj).filter((value) => {
    return typeof obj[value] === 'function'
});


const methods = getObjMethods(Array.prototype);

// console.log(methods);
console.log(Object.prototype === {}.__proto__);



// Class

