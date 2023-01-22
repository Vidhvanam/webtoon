import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import seriesModel from "./modules/series.js"
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
dotenv.config()

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }))
// app.use(express.urlencoded());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(
    ()=>{
        console.log("connected to DB")
    }
).catch((err)=> console.log("not connected to DB"))

app.use("/api/auth",authRoute)
// console.log(authRoute)
//routes routes
app.get("/",(req,res)=>{
    // console.log('dd')
    seriesModel.find({},(err,series)=>{
        if(err) return console.log(err)
        // console.log(series)
        res.send({series : [...series]})
    })
})


app.listen(6969,()=>{
    console.log("started")
})