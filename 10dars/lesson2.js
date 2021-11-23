// const obj = {
//     name: 'John'
// }
// function getName() {
//     return 'john'
// }

// const obj2 = {
//     lastname: 'Doe'
// }

// obj2.__proto__ = obj;


// console.log(obj2.name);

class Tiger {
    constructor(speed){
        this.speed = speed;
    }

    walk(){
        return 'tiger is walking'
    }
}

class Animal extends Tiger {
    constructor(){
        super(60)
    }
    run(){
        console.log(this.speed);
        return `'Animal is running => ' ${this.speed}`
    }
}



// const animal = new Animal();
// console.log(animal.run());

const obj = {
    getFullInfo() {
        return {
            name: this.name,
            age: this.age
        }
    }
};

const obj3 = {
    name: 'John',
    age: 32
}



obj.__proto__ = obj3;

// console.log(obj.getFullInfo());

const obj2 = new Object();
console.log(obj2);
console.log(obj2.__proto__);
