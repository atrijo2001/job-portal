const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors')
require("dotenv").config()


const app = express()
app.use(express.json());

const connDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)   
    } catch (error) {
        console.log(`Couldnt connect mongodb as error occured: ${error}`)
    }
    } 
 
 connDB();


const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`.yellow.bold))