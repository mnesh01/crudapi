import express from "express";
import connectToDB from "./database/db.js";
import { Todo } from "./models/todo.model.js";
const app = express()
const port = process.env.port || 4000

app.use(express.json())

connectToDB();

app.get("/todos", async(req, res) => {
    try {
        const result = await Todo.find();
        res.send({
            success: true,
            message: "Todo lists received successfully",
            data: result,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to receive successfully",
            data: result, 
        });  
    }
});

app.listen(port, () =>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
})