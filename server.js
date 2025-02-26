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
            message: "Failed to receive todo lists",
            data: result, 
        });  
    }
});

app.post("/create-todo", async(req, res) => {
    const toDoDetails = req.body;
    try {
        const result = await Todo.create(toDoDetails);
        res.send({
            success: true,
            message: "Todo lists received successfully",
            data: result,
        });
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: "Failed to receive successfully",
            data: result, 
        });  
    }
});

app.get("/:todoId", async(req, res) => {
    const todoId = req.params.todoId
    try {
        const result = await Todo.findById(todoId)
        res.send({
            success: true,
            message: "Todo list received successfully",
            data: result,
        });
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: "Failed to receive todo list ",
            data: result, 
        });  
    }
});



app.listen(port, () =>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
})