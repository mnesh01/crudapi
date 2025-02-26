import express from "express";
import connectToDB from "./database/db.js";
const app = express()
const port = process.env.port || 4000

app.use(express.json())

connectToDB();

app.listen(port, () =>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
})