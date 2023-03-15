// Math fucntion in JS
const pi = Math.PI
console.log("PI value is ",pi)

console.log("round of 3.4 is",Math.round(3.4))
console.log("round of 3.7 is",Math.round(3.7))
console.log("floor of 4.7 is",Math.floor(4.7))
console.log("floor of 4.2 is",Math.floor(4.2))
console.log("ceil of 5.2 is",Math.ceil(5.2))
console.log("ceil of 5.8 is",Math.ceil(5.8))
console.log("floor of -5.8 is",Math.floor(-5.8))
console.log("ceil of -5.8 is",Math.ceil(-5.8))
console.log("minimum of 1,3,45,67 is",Math.min(1,3,45,67))
console.log("min", Math.min(1,567,098,-10))
console.log("maximum of 45,67,890,12345678990 is ",Math.max(45,67,890,12345678990))

//Random from 0 to 0.999999999999999
for(i=0;i<=6;i++){
    console.log(`get random iteration ${i} and value is ${Math.random()}`)
}

//random 0 to 10
for(i=0;i<=5;i++){
    console.log(`get random iteration ${i} and value is ${Math.random()*10}`)
}

//random 1 to 10
console.log(Math.floor((Math.random()*10) +1))

console.log("Power of 3 to 4 is ",Math.pow(3,4))

console.log("log is ",Math.log(3))

console.log("sin value is",Math.sin(10))
console.log("cos value is",Math.cos(10))
console.log("tan value is",Math.tan(10))


