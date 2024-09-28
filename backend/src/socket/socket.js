// import { Server } from "socket.io";
// import http from 'http'
// import express from 'express'
// import cors from 'cors'

// const app = express()
// const server = http.createServer(app)
// const io = new Server(server,{
//     cors:{
//         origin:["http://localhost:5173"],
//         methods:["GET","POST"],
//         // credentials:true

//     }
// })

// io.on("connection",(socket)=>{
//      console.log("a user connected",socket.id);
//     //  console.log(socket.id)


//      // SOCKET.ON() is used to listen events.can be used both on client and server side
//    socket.on("disconnect",()=>{
//     console.log("a user disconnect",socket.id);
// })
// })



// export  {app,io,server}