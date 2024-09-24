import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import { Conversation } from "../models/conversation.model.js";
import {Message} from '../models/message.model.js'


const sendMessage = asyncHandler(async(req,res)=>{
   

try {
     // console.log("message sent " ,req.params.id)
     const {message} = req.body
     const {id : recieverid} = req.params
     const senderid = req.user._id
 
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
      //Socket io funtionality 

    //  await conversation.save()
    //  await newMessage.save()

     await Promise.all([conversation.save(),newMessage.save()])

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

        const conversation = await Conversation.findOne({
            participants:{
                $all:[senderid,userToChatId]
            }
        }).populate("messages")

        console.log(conversation)

        if(!conversation){
            return res.status(200)
            .json(new ApiResponse(200,{},"currently not any messages sent or received"))
        }

        const message = conversation.messages
        console.log(message)

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