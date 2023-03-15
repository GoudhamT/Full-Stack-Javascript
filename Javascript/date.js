//Lets explore Date function

let myDate = new Date()
console.log("Here is today's date",myDate)
// console.log(`Here is today's date ${myDate}`)
console.log("what's today's date",myDate.toString())
console.log("year for date",myDate.getFullYear())
console.log(`Today's day ${myDate.getDay()}`)
console.log("Date of today",myDate.getDate())
console.log("current hour",myDate.getHours())
console.log("current minute",myDate.getMinutes())
console.log("month for today",myDate.getMonth())
console.log(myDate.toJSON())
