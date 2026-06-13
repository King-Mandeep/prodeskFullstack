import express from "express";
import postRoutes from "./routes/postRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());



app.use("/posts",postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.get("/",(req,res)=>{
     res.json("Welcome to the server");
})
