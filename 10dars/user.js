class User {
    constructor(username, age, email, password, id){
        this.username = username;
        this.age = age; 
        this.email = email; 
        this.password = password; 
        this.id = id;
    }

    createUser() {
        User.addTwoNumbers(1,2)
        return {
            id: this.id,
            username: this.checkUsername(),
            age: this.checkAge(),
            email: this.checkEmail(),
            password: this.checkPassword()
        }
    }

    checkUsername(){
        if(this.username.length < 2){
            throw new Error('Username is not valid!')
        }
        return this.username.toLowerCase();
    }

    checkAge(){
        if(this.age<6) {
            throw new Error('You are not allowed to enter');
        }
        return this.age;
    }

    checkEmail() {
        if(this.email.length<5) {
            throw new Error('Email is not valid');
        }

        return this.email.toLowerCase();
    }

    checkPassword(){
        if(this.password.length < 7) {
            throw new Error('Password is too short !')
        }
        return this.password;
    }
    static addTwoNumbers(a, b) {
        console.log('static method');
        return a+b;
    }
}


// const sum = User.addTwoNumbers(1,2)
// console.log(sum);
try {
    const user = new User('JohnDoe', 7, 'john@doe.com', '1321asd9e8w', 1);
    console.log(user.createUser === User.prototype.createUser);
    const checkedUser = user.createUser();
    const arr = [];
    arr.push(checkedUser)
    console.log(arr);
    
} catch (error) {
    console.error(error.message);
}