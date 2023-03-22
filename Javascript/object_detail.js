//Object in detail


//Normal way to create object
const car = {
    tyre : "🛞",
    brand: "🚔"
}
console.log(car)

// update attribute
car.tyre = "🎡"
console.log(car)

//add new property to car object
car.engine = "1.5 Turbo"
console.log(car)

//constructor based syntax
const plane = new Object()
plane.fan = "🚁"
plane.color = "orange"
plane.features = { pilot:"goudham",
                    age : 33 }
console.log(plane)
console.log(plane.features.pilot)
//this will be initial beacuse this represents javascript engine in browser which points to window but this in code defines node engine
console.log(this)

//object referenced to another object or inheritance can be created like below
const transport = Object.create(car)
console.log(transport)

console.log(transport.tyre)
console.log(Object.getPrototypeOf(transport))

transport.type = "road"
console.log(transport)

//type 4 object with null reference
let sea = Object.create({})

Object.defineProperty(sea,'vehicle', { 
    // icon: "🚢🚢"
    get: () => "🚢🚢",
    enumerable: true    
    } 
    )
console.log(sea)
console.log(Object.getPrototypeOf(sea))
console.log(sea.vehicle)

///for loop for car object
for (c in car)
{
    console.log(c)
}

//for loop for sea object uses define property
for (s in sea)
{
    console.log(s)
}


//add methods to object
const calc = {
    number1 : 10,
    number2 : 30,
    add : function()
    {
        // return this.number1 + this.number2 
        // return this
        // console.log(this.number1)
        return this.number1 + this.number2, this
    },
    sub : function()
    {
        return this.number1 - this.number2
    }
}

// console.log(calc)
console.log(calc.add())
// console.log(calc.add().sub())

