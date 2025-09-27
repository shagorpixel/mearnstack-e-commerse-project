import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './Config/mongodb.js';
import connectCloudinary from './Config/cloudinary.js';
// App Config 
const app = express();
const port = process.env.port || 4000;
connectDb();
connectCloudinary();
// middleWare
app.use(express.json());
app.use(cors());

// api endPoints 
app.get('/',(req,res)=>{
    res.send("Api is Working");
});
app.listen(port,()=>console.log(`Your Server is running at http://127.0.0.1:${port}`))