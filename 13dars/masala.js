// function polindrom( num ) {
//     let result = true
//     let uzunlik = num.toString().length
//     let str= num.toString()
//     if (uzunlik%2 == 0 ){
//       for (let i = 0, w = uzunlik-1; i<uzunlik/2; i++,w--){
//         if (str[i] == str[w]){
//           result = true
//         }
//         else{
//           result= false
//           break
//         }
  
//       }
//     }else{
//       for (let i = 0, w = uzunlik -1; i < uzunlik/2-1; i++,w--){
//         console.log(i)
//         console.log(w)
//         if (str[i] == str[w]){
//           result = true
//         }
//         else{
//           result= false
//           break
//         }
//       }
//     }
//     return result
//   }
  
//   console.log( polindrom (1112111))

// function soattosoniya (arg){
//     return arg + ' soat ' + arg*60*60 + ' soniya'
//   }
  
//   console.log(soattosoniya(10))

// function topKatta (arr){
//     let a = arr[0]
//     for ( let i of arr){
//       if (a<i){
//         a=i
//       }
//     }
//     return a
//   }
  
//   function findLargestNums (arr){
//     let result=[]
//     for (let i of arr){
//       result.push(topKatta(i))
//     }
//     return result
//   }
  
//   console.log(findLargestNums ( [ [1,2,3,4,5],[2,3,4,5,6],[3,5,9] ] ) )


// const user = [
//     {
//         user_id: 1,
//         username: 'john doe',
//         password: '77766767',
//     }
//   ]
  
//   const todos = []
  
//   function passwordNumberCheck (element){
//     let i = 0;
//     while(element.length != i){
//         if (!isNaN(element[i])){
//             return true
//         }else{
//             i++;
//         }
//     }
//     return false
//   }
  
//   function register (username, password){
//     if (username.length >= 8 && username.length <=32 && password.length >=8 && passwordNumberCheck(password)){
//       user.push({
//         user_id: user[user.length-1].user_id+1,
//         username,
//         password
//       })
//     }
//     return user
//   }
//   register('Johonbek','johoncha1')
  
//   function addTodo (username,password,sms){
//     let us = 'username'
//     let pas = 'password'
//     let us_id = 'user_id'
//     for (let i = 0 ; i<user.length;i++){
//       if(username === user[i][us] && password === user[i][pas]){
//         todos.push({
//           todo_id:todos.length,
//           todo_text:sms,
//           user_id:user[i][us_id]
//         })
//       }
//     }
//     return todos
//   }
  
  
//   console.log(user)
//   console.log(addTodo('Johonbek','johoncha1','Salom'))
  
