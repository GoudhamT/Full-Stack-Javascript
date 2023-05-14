function myadd(x,y)
{
    return x+y
}
let arr = [10,2]
console.log(myadd(...arr))

function add_rnd(...args)
{
    console.log(args)
    let sum = 0
    for(let x of args)
    {

        sum = sum + x
    }
    return sum
}

console.log(add_rnd(1,2,3,4,5,6,7,8,9,10))