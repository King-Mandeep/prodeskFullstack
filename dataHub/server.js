import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";



dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());



app.use("/posts",postRoutes);


await connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.get("/",(req,res)=>{
     res.json("Welcome to the server");
})
