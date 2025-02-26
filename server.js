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

app.patch("/:todoId", async(req, res) => {
    const todoId = req.params.todoId;
    const updatedTodo = req.body;
    try {
        const result = await Todo.findByIdAndUpdate(todoId, updatedTodo, {
            new: true,
        });
        res.send({
            success: true,
            message: "Todo updated successfully",
            data: result,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Failed to update todo list ",
            data: result, 
        });  
    }
});

app.delete("/delete/:todoId", async(req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.todoId)
        res.send({
            success: true,
            message: "Todo deleted successfully",
            data: null,
        });
    } catch (error) {
        res.send({
            success: true,
            message: "Failed to delete todo ",
            data: null, 
        });  
    }
});


app.listen(port, () =>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
})