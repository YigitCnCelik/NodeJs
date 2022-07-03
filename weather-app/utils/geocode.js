const request = require("postman-request")

const geocode = (address, callback) =>{
    const url = "http://api.positionstack.com/v1/forward?access_key=3c6ec1b10cd445280ce4142508fc67ca&query=%20" + encodeURIComponent(address) + "%20"
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect to location services!", undefined)
        } else {
            callback(undefined,{latitude: response.body.data[0].latitude,
                                longitude: response.body.data[0].longitude,
                                location: response.body.data[0].locality})
        } 
    })
}

module.exports = geocode
