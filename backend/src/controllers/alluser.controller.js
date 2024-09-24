import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import {User} from '../models/user.model.js'

const allUser = asyncHandler(async(req,res)=>{
try {
        // console.log("got the user ")
     const loggedInUser =req.user._id

     const filteredUser= await User.find({
        _id:{
            $ne:loggedInUser
        }
     }).select("-password")

     return res.status(200)
     .json(new ApiResponse(200,filteredUser,"All Users fetched successfully"))


} catch (error) {
    console.log("Something went wrong while fetching all users : ", error.message)
    throw new ApiError(500,"Internal server Error")
}
})

export {allUser}