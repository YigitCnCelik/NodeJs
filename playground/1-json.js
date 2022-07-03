const fs = require("fs")

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync("1-json.json", bookJSON)

// const dataBuffer = fs.readFileSync("1-json.json")

// console.log(dataBuffer)

// const dataJSON = dataBuffer.toString()

// const data = JSON.parse(dataJSON)

// console.log(data.title)



const dataBuffer = fs.readFileSync("1-json.json")

const dataJSON = dataBuffer.toString()

const parsedData = JSON.parse(dataJSON)

parsedData.name = "Yiğit"
parsedData.age = 24


const stringifiedJSON = JSON.stringify(parsedData)



fs.writeFileSync("1-json.json", stringifiedJSON)
