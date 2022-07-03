const http = require("http")
const url = "http://api.weatherstack.com/current?access_key=e8f375f2ef380b22d1fa944c4545d6c5&query=40,-75&units=m"

const request = http.request(url, (response) => {
    let data = ""

    response.on("data", (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})


request.on("error", () => {
    console.log("An error", error)
} )
request.end()