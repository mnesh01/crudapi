# TodoList CRUD API

This is a simple **Todo List CRUD API** built with **Node.js, Express, and MongoDB**. The API allows users to create, read, update, and delete todo tasks.

## Features
- Create a new todo
- Retrieve all todos
- Update a todo
- Delete a todo

## Technologies Used
- Node.js
- Express.js
- MongoDB

## Project Structure
```
crudapi/
│── database/
│   ├── db.js              # Database connection
│── models/
│   ├── todo.model.js      # Todo model schema
│── .env                   # Environment variables
│── .gitignore             # Ignored files
│── package.json           # Dependencies and scripts
│── server.js              # Main server file
```

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/mnesh01/crudapi.git
   cd crudapi
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:4000` by default.

## API Endpoints

### Get all todos
```http
GET /todos
```
**Response:**
```json
{
  "success": true,
  "message": "Todo lists received successfully",
  "data": [...]
}
```

### Create a new todo
```http
POST /create-todo
```
**Request Body:**
```json
{
  "text": "Complete the project",
  "priority": "High",
  "deadline": "2025-03-01"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": { ... }
}
```

---
Feel free to contribute and improve the project! 🚀


