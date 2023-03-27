// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

import promptSync from 'prompt-sync';
const prompt = promptSync();

let number1 = parseInt(prompt("Enter Number 1: "))
let number2 = parseInt(prompt("Enter Number 2: "))

let add = (num1,num2) => { 
    console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`)} 

let sub = (num1,num2) => { 
    console.log(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`)} 

let mul = (num1,num2) => { 
    console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`)} 

let div = (num1,num2) => { 
    console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`)}

add(number1,number2)
sub(number1,number2)
mul(number1,number2)
div(number1,number2)