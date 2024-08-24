import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    fullname: {
        type: String,
        trim: true,
        index: true,
        required: true
    },
    profilePic: {
        type: String,
        // required: true
        
    },
    status: {
        type: String,
        required: true
    }
}, {timestamps: true})


userSchema.pre("save", async function(next){
    if(!this.isModified("password"))
        return
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)