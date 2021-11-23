const arr = [
    {name: 'Chris', work: 'backend'},
    {name: 'John', work: 'frontend'},
    {name: 'Doe', work: 'android'},
    {name: 'Alex', work: 'backend'},
];

function groupByKey(arr, keyField){
    return arr.reduce((acc, obj) => {
        const key = obj[keyField];
        if(!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(obj);
        return acc;
    }) 
}

console.log(groupByKey(arr, 'work'))