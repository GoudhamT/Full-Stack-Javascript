const prompt=require("prompt-sync")({sigint:true}); 

year = parseInt(prompt("Enter year: "))
month = parseInt(prompt("Enter month: "))

getDays = (y,m) => { return new Date(y,m,0).getDate()} 
console.log("The number of days for given month",getDays(year,month))