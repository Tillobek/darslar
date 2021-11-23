// [[Prototype]]

const obj1 = {
    firstname: 'john'
}

const obj2 = {
    lastname: 'Doe'
}

const obj3 = {
    firstname: 'Alex'
}

// const john = {
//     name: 'John Doe',
//
//     // get getname() {
//     //     return this.name;
//     // },
//     //
//     // set getname(name) {
//     //     this.name = name;
//     // }\
//
//     get getname() {
//         return this.name;
//     },
//
//     set setName(name) {
//         this.name = name;
//     }
// }
//
// // console.log(john.getname);
// john.setName = 'Alex Swagger';
// console.log(john.getname)
//




// obj3 <= obj2 <= obj1

obj2.__proto__ = obj1;

obj3.__proto__ = obj2


// console.log(obj3.firstname


function Person( name, age ) {
    this.name = name;
    this.age = age;
    // this.getFullName = function () {
    //     return 'Hello this is method'
    // }
}
Person.prototype.getFullName = function() {
    return `${this.name} ${this.age}`;
}
console.log()

//
const person = new Person('John', 35)
console.log(person)
// console.log(person.__proto__ === Person.prototype)
// const full = person.getFullName()
// console.log(full)













