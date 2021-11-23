// JS operators
/*
<
>
<=
>=
===
==
!==
&&
||
&
|
 */

// function getTruthyValue(a,b) {
//     return a>b;
// }



// && => AND
const a = 10;
const b = 1;

const c = 'hello';
console.log('AND=> ', a&&b&&c);


// || => OR


console.log('OR=> ', a || c || b);

function getValue1(){
    console.log('getValue1')
    return true;
}

function getValue2(){
    console.log('getValue2')

    return true;
}

function getValue3(){
    console.log('getValue3')

    return false;
}

function getValue4(){
    console.log('getValue4')

    return false;
}

console.log('functions => ---- => ', getValue1() || getValue2() || getValue3() || getValue4());

function createIds(number) {
    let ids = [];
    for (let i = 1; i <= number; i++) {
        ids.push(`${Date.now()}${i}`)
    }
    return ids;
}

console.log('IDS: ', createIds( 30))

function createEmails(arr){
    const emails = [];
    for (let i = 0; i < arr.length; i++) {
        emails.push(`${arr[i]}@mail.com`)
    }
    return emails;
}

function createUsername(number) {
    const usernames = [];
    for (let i = 1; i <= number; i++) {
        usernames.push(`user${i}`)
    }
    return usernames;
}

const usernames = createUsername(10);

console.log('EMAILS: ', createEmails(usernames))

function createPassword(users) {
    const passwords = [];
    for (let i = 0; i < users.length; i++) {
        passwords.push(`${i+1}${Date.now()}${users[i]}`)
    }
    return passwords
}

console.log('PASSWORDS', createPassword(usernames))