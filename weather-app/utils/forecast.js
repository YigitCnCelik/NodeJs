const request = require("postman-request")

const forecast = (Lat, Long, callback) => {
    const url =  "http://api.weatherstack.com/current?access_key=e8f375f2ef380b22d1fa944c4545d6c5&query=" + Lat + "," + Long + "&units=m"

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback("Unable to connect to weather service!", undefined)
        }else if(response.body.error){
            callback("Unable to find location", undefined)
        }
        else{
            callback(undefined, (response.body.current.temperature + " °C " + response.body.current.weather_descriptions))
        }
    })
}

module.exports = forecast