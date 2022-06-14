const http = require('http')

// const url = "http://jsonplaceholder.typicode.com/albums"


/* 

const yargs= require("yargs")
const http = require("http")
const { string } = require("yargs")



yargs.command({
    command:"api",
    builder:{
        url:{
            type:string,
            demandOption:true
        }
    },
    handler:function(argv){
        const req = http.request(argv.url,(res)=>{
            let allData = ""
            res.on("data",(myData)=>{
                allData+= myData.toString()
                })
                res.on("end", ()=>{
                    console.log(JSON.parse(allData))
                })
    })

    req.on("error" , (err)=> console.log(`error ${err}`))
        req.end()
    }
})


yargs.argv*/


const getDataFromApi = (url) => {
    const request = http.request(url, (response) => {
        let allData = ""
        response.on('data', (data) => {
            allData += data
        })

        response.on('end', () => {
            console.log(JSON.parse(allData))
        })
    })

    request.on('error', (error) => {
        console.log(error)
    })

    request.end()
}

module.exports = {
    getDataFromApi
}