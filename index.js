const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute =require("./routes/product.route.js")
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use("/api/products", productRoute)

mongoose.connect("mongodb+srv://sanmaychavan22:sanmaychavan22@backenddb.infmcyj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('connected to database');
        app.listen(3000, () => {
            console.log('port running at 3000')
        })
    })
    .catch(() => {
        console.log('connection failed')
    })
