/*Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm */

let myDate = new Date()

let format1 = myDate.getFullYear() + "-" + (myDate.getMonth()+1)+"-"+ myDate.getDate() +" "+ myDate.getHours() + ":" + myDate.getMinutes();


let format2 = myDate.getDate()  + "-" + (myDate.getMonth()+1) + "-" + myDate.getFullYear() + " " +
myDate.getHours() + ":" + myDate.getMinutes();

let format3 = myDate.getDate()  + "/" + (myDate.getMonth()+1) + "/" + myDate.getFullYear() + " " +
myDate.getHours() + ":" + myDate.getMinutes();

console.log(format1)
console.log(format2)
console.log(format3)