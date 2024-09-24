import mongoose,{Schema} from "mongoose";
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    fullname:{
      type:String,
      required:true 
    },
    username:{
        type:String,
        required:true ,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
      },
      password:{
        type:String,
        required:true,
        minlength:6
      },
      gender:{
        type:String,
        required:true ,
        enum:["Male","Female"]
      },
      profilePic:{
        type:String,
        default:""
      },
      refreshToken:{
        type:String
    }
      
},{timestamps:true})

userSchema.methods.generateAccessToken=function(){
  return jwt.sign({
    _id:this._id,
    username:this.username,
    fullname:this.fullname
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  })
}
userSchema.methods.generateRefreshToken=function(){
  return jwt.sign({
    _id:this._id
  },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  })
}

export const User = mongoose.model("User",userSchema)