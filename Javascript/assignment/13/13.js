// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const prompt=require("prompt-sync")({sigint:true}); 
  
let myage = parseInt(prompt("Enter your age: "))

if (myage > 18)
{
    console.log("You are old enough to drive")
}
else{
    console.log("you have to wait",18-myage,"years to drive")
}