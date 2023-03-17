//array

let myArr = [1,2,3,4,"even",false,[3,5,7,"odd",4]]
console.log(myArr)

//get type of element
console.log(typeof(myArr))

//find length of array
console.log(myArr.length)


//how to append item to array
myArr.push("item at last")
console.log(myArr)

//read item from array using index
console.log(myArr[4])

//update item using index
myArr[2] = false
console.log(myArr)

//to find is item in array or not
console.log(myArr.includes(false))

//delete last element from array
myArr.pop()
console.log(myArr)

//another method to define array
let newArr = new Array(2,4,6)
console.log(newArr)

//get type of element
console.log(typeof(newArr))


//get multiple item from array
console.log(newArr.slice(2,3))

//splice method used to insert value using array
newArr.splice(0,1,"HTML","CSS")
console.log(newArr)

//concatenation in JS
conArr = myArr.concat(newArr)
console.log(conArr)

//morethan one array concat
console.log("my array",myArr)
console.log("new array",newArr)
console.log("concat array",conArr)
console.log(myArr.concat(newArr,conArr))

//to find index number of given value
console.log(conArr.indexOf(false))

console.log(Array.isArray(conArr))

//join the given between all elements in array
console.log(newArr.join("goudham"))

//find the last index of given element - it gives last index value if element is more than once
//else value not in array then -1
console.log(myArr.lastIndexOf("HTML1"))

///map - this is used to execute same task for all item in array, like to find square root of item from array
 //only issue for other function like power then, array gives error when array has string or othr data type

console.log(newArr)
console.log(newArr.map(Math.sqrt))



//sorting array in ascending order
console.log(myArr.sort())

//revrse the array
console.log(myArr.reverse())

//sort in descending order
console.log(myArr.reverse(myArr.sort()))

console.log(myArr)

///shift used to remove first element
myArr.shift()
console.log(myArr)

//unshift is for insert element at first
myArr.unshift([1,2,3],"test")
console.log(myArr)

// convert array to string
mystr = myArr.toString()
console.log(mystr)

//convert string to array
myname = "goudham"
// myname_arr = myname.split('u') it will split at 'u' letter into 2 items of array
myname_arr = myname.split(' ')
console.log(myname_arr)