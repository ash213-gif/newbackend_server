const express=require("express");
const mongoose=require("mongoose");

require("dotenv").config();

const app=express();
app.use(express.json());


const port = process.env.PORT;

mongoose.connect(process.env.MongoDBUrl)

.then(()=>{console.log('MongoBD coonected ');})
.catch((e)=>{console.log(`MongoDB error${e}`);})

app.listen(port,()=>{console.log(`server is running port=>${port}`);})


