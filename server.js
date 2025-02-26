import express from express
const app = express()
const port = process.env.port || 4000

app.use(express.json())

app.listen(port, () =>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
})