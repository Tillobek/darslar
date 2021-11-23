// let room = {
//     number:23
//   };
  
//   let meetup = {
//     title: 'Conference',
//     accupiedBy: [{name:'John'},{name:"Alice"}],
//     place:room
//   };
  
//   room.accupiedBy = meetup;
  
//   meetup.self = meetup;
  
//   let x = JSON.stringify(room, function replace (key,value){
//     return key == 'accupiedBy' ? undefined : value
//   })
  
//   let y = JSON.stringify(meetup, function replacer (key,value){
//       return key == 'self' ? undefined : value;
//   })
//   console.log(y)


// const obj = {
//     name:'Ismi',
//     surname:"Familiya",
//     age:'Yoshi'
//   }
  
//   const obj1 = Object.assign({},obj)
//   obj1.age=26
  
  
//   const tostringfy = JSON.stringify(obj)
//   const toparsed = JSON.parse(tostringfy)
  
//   tostringfy.age = 55
//   toparsed.age=35
  
//   console.log(obj)
//   console.log(obj1)
//   console.log(tostringfy)
//   console.log(toparsed)
  

const obj = {
    "squadName": "Super hero squad", // < here
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man", // < here
        "age": 29, // < here
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast" // < here
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality", 
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  
  
  console.log(obj.squadName)
  console.log(obj.members[0].name)
  console.log(obj.members[0].powers[obj.members[0].powers.length-1])
  
  function getObjProp( obj ){
    return obj.squadName +' ' + obj.members[0].name +' '+ obj.members[0].powers[obj.members[0].powers.length-1]
  }
  
  console.log(getObjProp(obj))
  
  function getObjProp1 ({squadName : a, members:x}){
    console.log(x)
  }
  
  console.log(getObjProp1(obj))
  