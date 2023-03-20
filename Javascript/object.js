// Objects in JS

//how to create object 
let userName = {
    fname : "goudham",
    age:30,
    lname:"T",
    true:[2,4,5,false,67.90],
}
console.log(userName)

//to get only one data
console.log(userName.true)

//another method
console.log(userName['age'])

//for in loop - it gives only keys
for(x in userName)
{
    console.log(x)
}

//for in loop - it gives only values
for(x in userName)
{
    console.log(userName[x])
}

//for in loop - it gives only keys
console.log(userName.items)
// for(x in userName)
// {
//     console.log(x)
// }


