// import dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

// import routers
import postRoutes from "./routes/posts.js"

const app = express();
dotenv.config();



app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes)

const CONNECTION_URL = process.env.MONGO_URI || "mongodb+srv://yannWe:U2rvBsktR3wPOFhu@cluster0.embsp.mongodb.net/memories?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5005;

    mongoose.connect(CONNECTION_URL).then(()=> app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))