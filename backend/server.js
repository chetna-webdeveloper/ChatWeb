import dotenv from 'dotenv'
import connectDB from './src/db/index.js'
import {server} from './app.js'


dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
  server.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at the port ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO DB CONNECTION FAILED !!!",err);
})










/*
import express from "express";

const app = express()

;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on((error)=>{
            console.log("ERROR ON EXPRESS :",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR while connecting database : ", error);
    }
})()*/
