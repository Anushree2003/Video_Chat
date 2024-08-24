import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { registerUser, LoginUser } from "../controllers/user.controller.js"
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "profilePic",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(LoginUser)

export default router 