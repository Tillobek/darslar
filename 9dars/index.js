// Class 
class Go {
    constructor(a, b){
        this.a = a;
        this.b = b
    }

    run() {
        return this;
    }
}



const go = new Go(1, 5);

console.log(go.run());


function Home(a, b){
    this.a = a;
    this.b = b;

    this.run = function(){
        return this;
    }
}

const home = new Home(4, 5)
console.log(home.run());

// const palidrome = (string) => string === string.split("").reverse().join();
// console.log(palidrome("aba"));
// console.log(palidrome("abas"));