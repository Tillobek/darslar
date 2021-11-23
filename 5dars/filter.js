let array1 = [1,2,3,4,5,6,7,8,9,10]

const user = [
    {
        user_id: 1,
        username: 'john doe',
        email: 'johndoe666@gmail.com',
        password: '77766767',
        date: '2021.10.11'
    },
    {
        user_id: 2,
        username: 'jolasd',
        email: 'johndoe6asdas66@gmail.com',
        password: '7776asdasdsad6767',
        date: '2021.10.11'
    }
]
let result = user.filter(function (value) {
    return value.user_id===1
})
console.log(result);