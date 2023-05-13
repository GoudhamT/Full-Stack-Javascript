let arr = ['Hi',"hello","vanakam","hola","bonjur"]

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

