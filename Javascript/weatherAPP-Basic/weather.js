// Declare variable for elements on screen
// Get Data from API

//variable to get city input data

const searchCity = document.getElementById('cityinput')

const countryName = document.getElementById('cntryname')
const stateName = document.getElementById('sname')
const cityName = document.getElementById('cityname')
const humidity = document.getElementById('humid')
const windSpeed = document.getElementById('wspeed')
const temperature = document.getElementById('tempc')
const weather = document.getElementById('weather')
const weather_img = document.getElementById('forecastimg')

const getweather = async(event) => { 
//below code prevents removing value from screen
    event.preventDefault();

    console.log(event)
//check if condition before calling API
if(!searchCity.value)
{
    alert("Please enter city")
    return
}
let city = searchCity.value
//fetch API data 
const url = `http://api.weatherapi.com/v1/current.json?key=b50c48ba209f461389892802232905&q=${city}`

// const getData = fetch(url)
//                 .then( (res)=> res.json() )
//                 // .then( (data)=>{console.log(data)} )
//                 .catch( (err)=>{console.log(err)} )

const getData = await fetch(url)
const jsonData = await getData.json()
countryName.innerText = jsonData.location.country
stateName.innerHTML = jsonData.location.region
cityName.innerHTML = jsonData.location.name
humidity.innerText = jsonData.current.humidity
windSpeed.innerText = jsonData.current.wind_kph
temperature.innerText = jsonData.current.temp_c
weather.innerText = jsonData.current.condition.text
weather_img.src = jsonData.current.condition.icon
}


