// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

const prompt=require("prompt-sync")({sigint:true});

let number = parseInt(prompt("enter number: "))
if (number % 2 == 0)
{
    console.log(`the given number ${number} is even`)
}
else{
    console.log(`the given number ${number} is odd`)
}