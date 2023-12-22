import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from "./model/product.js";
dotenv.config();
import path from 'path';
import { postApiProducts, getApiProducts,deleteApiProducts}  from './controlers/products.js';
 
const app = express();

app.use(express.json())

const __dirname = path.resolve();
const connectDB =  async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log('mongodb connected successfully !')
    }
}
connectDB();

app.post('/api/v1/products', postApiProducts )

app.get('/api/v2/products' , getApiProducts )

app.delete('/api/v3/products/:_id',deleteApiProducts)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '..','client','build')));

    app.get('*',(req,res) =>{
        res.sendFile(path.join(__dirname , '..', 'client', 'build', 'index.html'))
    });
}



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server is runing on PORT ${PORT}`)
})