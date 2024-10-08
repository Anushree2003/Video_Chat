import express from "express";

const app = express()

app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))


import userRouter from "./routes/user.route.js"
app.use("/api/v1/users", userRouter)

export { app }