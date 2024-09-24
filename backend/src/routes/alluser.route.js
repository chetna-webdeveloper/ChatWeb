import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { allUser } from "../controllers/alluser.controller.js";

const router = Router()

router.route("/").get(verifyJwt,allUser)

export default router