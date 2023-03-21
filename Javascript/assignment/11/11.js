// Use the Date object to do the following activities

let myDate = new Date()
// What is the year today?
console.log("we are in year",myDate.getFullYear())

// What is the month today as a number?
console.log("current month is",myDate.getMonth())

// What is the date today?
console.log("todays date is",myDate.getDate())

// What is the day today as a number?
console.log("this is weeks of ",myDate.getDay(),"day")

// What is the hours now?
console.log("hours is",myDate.getHours())

// What is the minutes now?
console.log("minutes:",myDate.getMinutes())


// Find out the numbers of seconds elapsed from January 1, 1970 to now
const elapse = myDate.getTime() + (myDate.getTimezoneOffset() * 60 * 1000)
// console.log(elapse)
console.log("seconds elapsed from Jan 1 1970 is",Math.round(elapse/1000))