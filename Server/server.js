import express from "express"
import cors from "cors"
import 'dotenv/config'
import mongoose from "mongoose"
import connectDB from "./configs/db.js"
import { inngest, functions } from "./inngest/index.js"


const app = express()

app.use(express.json())
app.use(cors())


app.get("/"  , (req , res)=>res.send('server is running'))
app.use("/api/inngest" , serve({client : inngest , functions}))

const port = process.env.PORT || 4000
await connectDB()



app.listen(port , ()=> console.log('Server is runnning  on ' + port))

//mongodb+srv://mauryagagan1:nzwE84wkuTZTZJjN@cluster0.mxnsfqv.mongodb.net/