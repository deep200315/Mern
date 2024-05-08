import express from 'express';
import cors from "cors";
import {db,connectToDB} from '../src/db.js';


const app=express()
app.use(express.json()) 
app.use(cors())
















app.get('/',(req,res)=>{
    res.send("server running successfully")
})
connectToDB(()=>{
    app.listen(9000,()=>{
        console.log('server Running at port 9000')
    })
}
)