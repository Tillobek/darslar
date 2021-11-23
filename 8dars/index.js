// if (condition) {
    
// } else {
    
// }

// function getCondition(a,b) {
//     if (a>b) {
//         return a;
//     } else if(b>a) {
//         return b
//     } else {
//         return 0;
//     }
// }

// const result = getCondition(1,2);
// console.log(result);


// switch case
// function getswitch(a) {
//     switch (a) {
//     case 'Uzbekistan':
//         console.log('Capital of Uzbekistan Tashkent');
//         break;

//     default:
//         console.log('Unknonw country');
//         break;
//     }
// }

// getswitch('Uzbekistan');


// Ternary Operator  condition ? true value : false value
// const maxValue = function(a,b) {
//     return a>b ? a : b;
// }

// const max = maxValue(5,3)
// console.log(max);


// Loops 
const arr = [1,2,3,4,5,6,7,9,10];

// function getValues(arr) {
//     for(let start=0; start<arr.length; start++){
//         console.log(`${start} indeksdagi elementning qiymati => ${arr[start]}`);
//     }
// }

// getValues(arr);

// while
// while(conditon) {

// }

// function getWhile(a, b) {
//     while(true) {
//         console.log(true);
//     }
// }

// console.log(getWhile(1,6));

// for in
function forIn(arr) {
    for(let index in arr) {
        console.log(index);
        if(index==2){
            // break;
            continue
        }

        console.log('run', index)
    }
} 

// forIn(arr)
// for of
function forOf(arr) {
    for(let element of arr) {
        console.log(element);

    }
} 

// forOf(arr);

// const obj = {}; // Object Literal
// const ob1 = new Object(); // Constr.
// const obj2 = Object(); // Factory


// console.log(a);

// const obj = {
//     name: 'uzbek',
//     nationality: 'uzbek'
// }

// const obj2 = new Object();
// obj2.name = 'uzbek2';
// obj2.nationality = 'uzbek'

// console.log(obj2);

// Obj

const obj = {
    name: 'John',
    lastname: 'Doe',
    phone: '+998765498359',
    address: 'Chilonzor'
}

function getValue(obj) {
    const res = []
    for(let value in obj) {
        res.push(obj[value])
    }
    console.log(res);
    return res
}

// getValue(obj)


const listOfStudents = [
    {
        id: 1,
        username: '@student1',
        email: 'student1@gmail.com'
    },
    {
        id: 2,
        username: '@student2',
        email: 'student2@gmail.com'
    },
    {
        id: 3,
        username: '@student3',
        email: 'student3@gmail.com'
    },
    {
        id: 4,
        username: '@student4',
        email: 'student4@gmail.com'
    },
    {
        id: 5,
        username: '@student5',
        email: 'student5@gmail.com'
    },
    
]

function getStudentInArray(arr) {
    const main = []; // asosiy javob
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];  // => {id: 1, username: '@student1', email: 'student1@gmail.com'}
        const obj = [];
        for(let key in element) {
            obj.push(element[key]) // 1, '@student1', 'student1@gmail.com'
        }

        // obj => [1, '@student1', 'student1@gmail.com']
        main.push(obj)
    }

    console.log(main);
}

// getStudentInArray(listOfStudents);


function getMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return {
        min,
        max 
    }
}
const r = getMinMax(arr);
console.log('Spread operator', r);


function getMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element>max){
            max = element;
        }
        if(element<min){
            min = element;
        }
    }
    console.log('Core', min, max);
    return {
        min, max
    }
}

getMinMax(arr)

function getMinMaxWithReduce(arr) {
    const max = arr.reduce((p, c) => c>p ? c : p)
    const min = arr.reduce((p, c) => c<p ? c : p)
    console.log('Reduce', min, max);
    return {
        min, max
    }
}

getMinMaxWithReduce(arr)