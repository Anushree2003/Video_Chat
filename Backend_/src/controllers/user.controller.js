import { User } from "../models/user.models.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, fullname, status, password } = req.body

    if (!username || !email || !fullname || !status || !password)
        res.status(404).send("All fields are necessary!")

    const isUserpresent = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (isUserpresent)
        res.status(409).send("User with same email or username already exists")

    const profilePicPath = req.files?.profilePic[0]?.path

    if (!profilePicPath)
        res.status(400).send("Profile pic is not uploaded!")

    const profilePicCloudinary = await uploadOnCloudinary(profilePicPath)

    if (!profilePicCloudinary)
        res.status(404, "The image is not uploaded on cloudinary")

    const createUser = await User.create({
        username: username.toLowerCase(),
        password,
        email,
        status,
        fullname
    })

    if (!createUser)
        res.status(404, "Something went wrong while registering the user")

    return res
        .status(200)
        .send("User created successfully!")
})

const LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email && !password)
        res.status(404).send("Email and Password is required!")

    const existingUser = User.findOne({
        $or: [{ email }, { password }]
    })

    if(!existingUser)
        res.status(404).send("User does not exist")

    const isValidPassword = existingUser.isPasswordCorrect(password)

    if(!isValidPassword)
        res.status(404).send("Invalid login credentials")

})

export {
    registerUser,
    LoginUser
}