import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './Config/mongodb.js';
import connectCloudinary from './Config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
// App Config 
const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();
// middleWare
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/api/user',userRouter);
app.use('/api/product',productRoute);

// api endPoints 
app.get('/',(req,res)=>{
    res.send("Api is Working");
});
app.listen(port,()=>console.log(`Your Server is running at http://127.0.0.1:${port}`))