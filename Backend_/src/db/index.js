import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const url = `${process.env.MONGO_URI}/${DB_NAME}`

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected successfully to Mongo DB");
    } catch (err) {
        console.error("Error in connecting with Mongo! ",err);
        process.exit(1)
    }
}

export { connectDB }