import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.urldb)
.then(()=>{
    console.log("funciona la conexión a la base de datos");
})
.catch((error)=>{
    console.log("no funciona la conexión a la base de datos",error); //yo
})

const app=express();
app.use(cors());

app.listen(4000,()=>{
    console.log("Se escucha correctamente el servidor.");
})