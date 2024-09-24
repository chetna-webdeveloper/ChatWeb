import mongoose,{Schema} from "mongoose";

const messageSchema = Schema({
    senderid:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    recieverid:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    },
},{timestamps:true})


export const Message = mongoose.model("Message",messageSchema)