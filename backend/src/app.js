import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
// app.use(cors({
//     origin: 'http://localhost:3000' // Allow frontend on port 5000
//   }));

import userRouter from './routes/user.route.js'
import messageRouter from './routes/message.route.js'
import allRouter from './routes/alluser.route.js'
app.use("/api/v1/users",userRouter)
app.use("/api/v1/messages",messageRouter)
app.use("/api/v1/alluser",allRouter)

export {app}