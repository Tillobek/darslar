// // Variable scope and closure
// let a = 'Hello'
// function call(){
//         // let a = 'John';
//         console.log(a);
// }

// a = 'John';

// // call()


// // Nested Functions


// function main(){
//         function nested(){
//                 console.log('I am nested Function.');
//         }

//         nested()
// }

// // main()




// // console.log(count()) // 1
// // console.log(count()) // 2
// // console.log(count())
// // console.log(count())
// // const obj = {
// //         name: 'John'
// // }
// // let name = 'Alex';

// // {

// // console.log(name);
// // }


// // let phrase = 'Hello';

// function getPhrase(){
//         return function getPhrase2(){
//                 return function getPhrase3(){
//                         return function getPhrase4(){
//                                 console.log(phrase);
//                         }
//                 }
//         }
// }
// // getPhrase()()()();

// function makeCount(){
        
//         let count1 = 0;
//         return function(){
//                 return 'John';
//         }
// }

// // let count = makeCount();

// // console.log(count());


// // new Function()

//         // Task - 1

// // let name = "John";

// // function sayHi() {
// //   console.log("Hi, " + name);
// // }

// // name = "Pete";

// // sayHi(); // what will it show: "John" or "Pete"?



//         // Task - 3

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// // console.log( counter() ); // 0
// // console.log( counter() ); // 1

// // console.log( counter2() ); // ?
// // console.log( counter2() ); // ?


//         // Task - 4

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }

// sayHi();
// "use strict"
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// sayHi();


        // Task - 5

// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4


        // Task - 6

// What will be the result of this code?

let x = 1;

function func() {
        console.log(x); // ?
        
        let x = 2;
}

// func();
// P.S. There’s a pitfall in this task. The solution is not obvious.


// Task - 7

// Filter through function
// importance: 5
// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. 
// If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
// For instance:

// /* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
        return (value) => value>=a && value<=b
}

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// const arr = [1,32,3,4,6,87,9];

// console.log(arr.filter((value) => value>10));

// arr.filter((value) => value>=3 && value<=6)



                // Task - 8


        // Task - 8

// Sort by field
// importance: 5
// We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
// The usual way to do that would be:

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?

// users.sort(byField('name'));
// users.sort(byField('age'));
// So, instead of writing a function, just put byField(fieldName).

// Write the function byField that can be used for that.



const n = parseInt('1001', 2);

// console.log(n);




        // Task - 9


// Army of functions
// importance: 5
// The following code creates an array of shooters.

// Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // create a shooter function,
      console.log( i ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  console.log(shooters);
  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
army[3]()
// Why do all of the shooters show the same value?

// Fix the code so that they work as intended.