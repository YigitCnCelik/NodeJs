const request = require("postman-request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
// const url = "http://api.weatherstack.com/current?access_key=e8f375f2ef380b22d1fa944c4545d6c5&query=37.8267,-122.4233&units=m"

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log("Unable to connect to weather service!")
//     }else if(response.body.error) {
//         console.log("Unable to find location")
//     }else{
//         console.log(response.body.current.temperature + " °C " + response.body.current.weather_descriptions)
//     }
// })

// Geocoding
// Address -> Lat -> Weather

// const geocodeURL =  "http://api.positionstack.com/v1/forward?access_key=3c6ec1b10cd445280ce4142508fc67ca&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC"

// request({url: geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log("Unable to connect to geocode service!")
//     } else {
//         console.log("Lat: " + response.body.data[0].latitude + " Long: " + response.body.data[0].longitude)
//     }   
// })


const input = process.argv
address = input[2]
if(!address){
    console.log("Please provide an address")
}
else{
    geocode(input[2], (error, {latitude, longitude, location}) => {
        if(error) {
           return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}









