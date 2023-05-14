/*let arr = ['Hi',"hello","vanakam","hola","bonjur"]

//call back example
arr.forEach(mygreet)

function mygreet(greet)
{
    console.log(greet)
}


//forEach is HOF and () => {} - arrow function is call back
arr.forEach( (val)=>{console.log(val)} )

setTimeout(()=>{console.log("Hi welcome")},2000)

// setTimeout( arr.forEach(mygreet), 3000)

setInterval(() => {console.log("goudham")},1000)


//map
let arr = [2,3,4,5,6]

const cubiod = arr.map( (num)=> { num ** 3} )

console.log(cubiod);

//filter
let cntry = ["India", "US", "Canada","UK"]

let country = cntry.filter( (val)=> { return val.includes("a")})

console.log(country)

//reduce
const num = [1,2,3,4,5,6,7,8,9,10]

let sum_num = num.reduce( (acc,curr)=> acc*curr)

console.log(sum_num)


let names = ['a','b','goudham',"Goudham","Niralya","niralya","nithila","N"]

console.log(names.sort())
console.log(names.reverse())

const arr = [1,2,3,4,5]
let [v1,v2,v3,v4,v5] = arr
console.log(v1)


const arr = [1,2,3,4,5]
let [v1,v2, ,v4,v5] = arr
console.log(v1,v2,v4)
*/
const arr = [1,2,3,4,5]
let [v1,...v] = arr
console.log(v1)
console.log(v)
