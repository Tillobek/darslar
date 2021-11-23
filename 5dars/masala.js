const user = [
    {
        user_id: 1,
        username: 'john doe',
        email: 'johndoe666@gmail.com',
        password: '77766767',
        date: '2021.10.11'
    }
]

function addUser (username, email, password){
    user.push({
        user_id: user[user.length-1].user_id+1,
        username,
        email,
        password,
        date: new Date()
    })
    return user
}
addUser('Johon','@mail.ru','uhuecwieuc')
addUser('Olim','@mail.ru','uhuecwieuc')
// console.log(user);

function searchUser( arg ){
    let result
    if (typeof arg === 'number'){
        result = user.filter(function (value){
            return value.user_id===arg
        })
    }

    else if( typeof arg ==='string'){
        result = user.filter(function (value){
            return value.username=== arg || value.email === arg
        })
    }
    else {
        return 'String yoki son kiriting'
    }
    return result
}

// console.log(searchUser(1));
// console.log(searchUser('John'));
console.log(searchUser('john doe'));
