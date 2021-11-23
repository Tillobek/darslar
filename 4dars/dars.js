const firstName = ['Alisher', 'Said', 'Olim', 'SHavkat', 'Baxodir', 'Olim', 'Olmos', 'Abdulla', 'Ixtiyor']
const lastName = ['Qodirov', 'Olimov', 'Saidov', 'Shavkatov', 'Baxodirov', 'Olimosov', 'Abullayev', 'Ixtiyorov']
const phone = '+998 97 '+(Math.round(Math.random()*10000000))
const email = ['Alisher@mail.com', 'Said@mail.com', 'Olim@mail.com', 'SHavkat@mail.com', 'Baxodir@mail.com', 'Olim@mail.com', 'Olmos@mail.com', 'Abdulla@mail.com', 'Ixtiyor@mail.com']
const password = ['Alisher@mail.com', 'Said@mail.com', 'Olim@mail.com', 'SHavkat@mail.com', 'Baxodir@mail.com', 'Olim@mail.com', 'Olmos@mail.com', 'Abdulla@mail.com', 'Ixtiyor@mail.com']



function createUser (firstName, lastName, phone, email, password){
    return {
        firstName,
        lastName,
        phone,
        email,
        password,
        Date: Date("Nomvember 10 2021")
    }
}



// console.log(createUser(
//     firstName[Math.ceil(Math.random())],
//     lastName[Math.round(Math.random())],
//     phone,
//     email[Math.round(Math.random())],
//     password[Math.round(Math.random())]
// ))
let users= []
for (let i =0; i <10 ; i++){
    users.push (createUser(firstName[Math.ceil(Math.random())],
    lastName[Math.round(Math.random())],
    phone,
    email[Math.round(Math.random())],
    password[Math.round(Math.random())]))
}

console.log(users)



