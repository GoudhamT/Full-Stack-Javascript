//Here we can explore how prototypes works in javascripts


//prototype chain
const cityObj = {
    cityName : this.name,

    howIsClimate(cityName){
        console.log(`${this.name} is one of hottest climate in India`)
        console.log("hottest climante in",this.name)
    },

}

///property chain do loops
// const myDate = new Date();
// let object = myDate

// do{
//     object = Object.getPrototypeOf(object)
//     console.log(object)
// }while(object)


//shadowing properties - similar to override function from parent property
// const myDate = new Date(1995, 11, 17);
// console.log(myDate.getFullYear())

// myDate.getFullYear = function(){
//     console.log("this is override function")
// }

// console.log(myDate.getFullYear())

// console.log(Object.getPrototypeOf(myDate))

//Setting a prototype

// const mduCity = Object.create(cityObj)

// console.log(mduCity)

// console.log(mduCity.cityName)
// console.log(mduCity.howIsClimate())


function city(name)
{
    this.name = name
}

Object.assign(city.prototype,cityObj)

const mdu = new city('Madurai')
mdu.howIsClimate()
// console.log(mdu.cityName)
// console.log(mdu.howIsClimate())