import dotenv from "dotenv"
import { connectDB } from "./db/index.js"
import express from "express"
import { app } from "./app.js"

dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error(error);
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        })
    })
    .catch((err)=>{
        console.log("Failed to connect to MONGO!", err);
    })