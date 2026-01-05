const express = require("express")
const http = require("http")
const cors = require("cors")
require("dotenv").config();
require("./database/Index");
const Authroute = require("./routes/Authroutes")
const Userroute = require("./routes/UserRoutes")
const Cartroute = require("./routes/Cartroutes")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth",Authroute)
app.use("/user",Userroute)
app.use("/cart",Cartroute)
app.get("/",(req,res)=>{
res.send("hii world") 
})

const server =http.createServer(app)
const host=process.env.HOST 
const port = process.env.PORT

app.listen(port,host,()=>{
    console.log(`server running at http://${host}:${port}`)
})