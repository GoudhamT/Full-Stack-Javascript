// function in JS

// named function
function sum(){
    let a = 10
    let b = 20
    console.log(`the sum of ${a} and ${b} is ${a+b}`)
}

sum()

// function with parameters
function sum_p(value1,value2)
{
    console.log(`the sum of ${value1} and ${value2} is ${value1+value2}`)
}

sum_p(10,100)

// function with return parameter
function sum_r(value1,value2){
    let result = value1 + value2
    return result
}

let sum_op = sum_r(100,200)
console.log(sum_op)

console.log(sum_r(400,400))

//function with array as input
// function using for loop inside function
function arr_for(myarr){
    let sum = 0
    for(i=0;i<myarr.length;i++)
    {
        sum = sum + myarr[i]
    }
    return sum
}
const op_arr_for = arr_for([1,3,5,7,9,11])
console.log("for loop inside function", op_arr_for)

//function using loop outside
function add(num,result)
{
    result = num + result
    return result
}

let add_loop = [1,3,5,7,9,11]
let res = 0
for(i of add_loop)
{    
    res = add(i,res)
    
}
console.log(res)


//function without argument but input with multiple values
function args()
{
    let final = 0
    for(let i=0;i<arguments.length;i++)
    {
        console.log(arguments[i])
        final = final + arguments[i]
    }
    return final
}

console.log(args(12,4,6,8,10))
console.log(args[1,3,5,7,9,11])