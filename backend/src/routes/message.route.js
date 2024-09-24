import { Router } from "express";
import { sendMessage,getMessage } from "../controllers/message.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";


const router = Router()

//secure route
router.route("/send/:id").post(verifyJwt,sendMessage)
router.route("/:id").get(verifyJwt,getMessage)


export default router