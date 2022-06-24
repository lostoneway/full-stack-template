//setup dependancies 
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

//variables 
let db,    
    dbConnectionString = process.env.DB_STRING,
    dbName = 'star-wars-quotes',
    collection

//connect to db
MongoClient.connect(dbConnectionString) 
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('quotes')
    })

//setup listening port 
app.listen(process.env.PORT || PORT, () => {
    //check that your server is running during development
    console.log(`Server is running on port ${process.env.PORT}`)
})