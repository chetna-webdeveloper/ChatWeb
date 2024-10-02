import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import { Conversation } from "../models/conversation.model.js";
import {Message} from '../models/message.model.js'
import { io } from "../../app.js";
import { getRecieverSockedId } from "../../app.js";
// import { getReceiverSocketId, io } from "../socket/socket.js";


const sendMessage = asyncHandler(async(req,res)=>{
try {
     const {message} = req.body
     const {id : recieverid} = req.params
     const senderid = req.user._id
    //  console.log(`Sender ID: ${senderid}, Receiver ID: ${recieverid}`);
    let conversation= await Conversation.findOne({
         participants:{
             $all:   [senderid,recieverid]
         }
     })
 
     if(!conversation){
         conversation = await Conversation.create({
             participants:[senderid,recieverid]
         })
     }
 
     const newMessage = await new Message({
         senderid,
         recieverid,
         message
     })
 
     if(newMessage){
         conversation.messages.push(newMessage._id)
     }



    //  await conversation.save()
    //  await newMessage.save()

     await Promise.all([conversation.save(),newMessage.save()])

      //Socket io funtionality

      const recieverSocketId = getRecieverSockedId(recieverid)
      if(recieverSocketId){
        io.to(recieverSocketId).emit("newMessage",newMessage)
      }

     return res.status(200)
     .json(new ApiResponse(200,newMessage,"Message sent successfully"))
} catch (error) {
    console.log("Error Message while sending the message : " , error.message)
    throw new ApiError(500,"Internal Server Error")
}

})


const getMessage = asyncHandler(async(req,res)=>{
    try {
        const {id:  userToChatId} = req.params
        const senderid = req.user._id

        // console.log(`Sender ID: ${senderid}, User To Chat ID: ${userToChatId}`);

        const conversation = await Conversation.findOne({
            participants:{
                $all:[senderid,userToChatId]
            }
        }).populate("messages")

        // console.log(conversation)

        if(!conversation){
            return res.status(200)
            .json(new ApiResponse(200,{},"currently not any messages sent or received"))
        }

        const message = conversation.messages
        // console.log(message)

        return res
        .status(200)
        .json(new ApiResponse(200,message,"Got the message"))
    } catch (error) {
        console.log("Error Message while recieving the message : " , error.message)
    throw new ApiError(500,"Internal Server Error")
    }
})


export {
    sendMessage,
    getMessage
    
}