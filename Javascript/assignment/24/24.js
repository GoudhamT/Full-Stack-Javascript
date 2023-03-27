// Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let even_arr = Array()
let odd_arr = []

for(let i=0;i<=100;i++){
    if(i%2 == 0){
        even_arr.push(i)
    }
    else{
        odd_arr.push(i)
    }
}

console.log("List of even numbers are ",even_arr)
console.log("List of odd numbers are ",odd_arr)