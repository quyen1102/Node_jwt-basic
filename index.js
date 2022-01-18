
require('dotenv').config()
require('express-async-errors')


const express = require('express');
const app = express();
// var bodyParser = require('body-parser')

const route = require('./src/routers')

const port = process.env.PORT ||3000

const notFoundMiddleware = require('./src/middleware/not-found')
const errorHandlerMiddleware = require('./src/middleware/error-handler')



// //middleware
app.use(express.static('./src/public'))
app.use(express.json())
// app.use(bodyParser.json())

//route 
route(app)


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)






const start = async () => {
    try {
        // connectDB
        app.listen(port, ()=>{
            console.log(`sever listen port on ${port}`)
        })
    } catch (error) {
        console.error(error)
    }
}
start()