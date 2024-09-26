import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from '../utils/ApiResponse.js'
import bcrypt from 'bcryptjs'



const generateAccessAndRefreshToken = async (userid) => {
    try {
        const user = await User.findOne(userid)
        const accessToken =  user.generateAccessToken()
        const refreshToken =  user.generateRefreshToken()
    

        // console.log(process.env.ACCESS_TOKEN_SECRET,process.env.REFRESH_TOKEN_SECRET)

        if (!accessToken || !refreshToken) {
            throw new Error('Token generation failed');
        }


        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
    
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500,"something went wrong while generating access and refresh token")
    }
}

const signUp = asyncHandler(async (req, res) => {
    const { fullname, username, password, gender } = req.body

    if ([fullname, username, password, gender].some((field) => field?.trim() == "")) {
        throw new ApiError(400, "All Fields are Required")
    }

    const existedUser = await User.findOne({ username })

    if (existedUser) {
        throw new ApiError(400, " This Username already exist")
    }

    //hash password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const user = await User.create({
        fullname,
        username:username.toLowerCase(),
        password: hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    if (!user) {
        throw new ApiError(400, "Invalid user details")
    }

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500,"something went wron while registering the user")
    }
    // user.save()
    return res
        .status(201)
        .json(new ApiResponse(201, createdUser, " User Signup  Successfully"))
})


const logIn = asyncHandler(async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new ApiError(401, "username and password is required")
    }
    // console.log(username)
    // const user = await User.findOne({ username })
    const user = await User.findOne({username})
    // console.log(user)
    // console.log(user._id)
    if (!user) {
        throw new ApiError(401, "user doesn't exist")
    }
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")
    if (!isPasswordCorrect) {
        throw new ApiError(401, "Password is incorrect ")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    // console.log(accessToken, refreshToken)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken ")

    const options ={
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(new ApiResponse(200, { user: loggedInUser, accessToken, refreshToken }, "User details fetched successfully"))

})


const logOut = asyncHandler(async(req,res)=>{
           await User.findByIdAndUpdate(req.user._id , {
            $unset:{
                refreshToken:1
            }
           },{
            new:true
           })
           const options={
            httpOnly:true,
            secure:true
           }

           return res
           .status(200)
           .clearCookie("accessToken",options)
           .clearCookie("refreshToken",options)
           .json(new ApiResponse(200,{},"user logged out successfully"))
})

export {
    signUp,
    logIn,
    logOut
}
