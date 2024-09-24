import { Router } from "express"
import { logIn,logOut,signUp } from "../controllers/user.controller.js"
import { verifyJwt } from "../middlewares/auth.middleware.js"

const router = Router()


router.route("/SignUp").post(signUp)
router.route("/Login").post(logIn)


//secure routes
router.route("/logout").post(verifyJwt, logOut)

export default router