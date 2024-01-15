const express=require("express");
const app=express();
const cors=require("cors");
const router=require("./routes")
const mongoose=require("mongoose");
const cookieParser=require('cookie-parser')

const PORT = process.env.PORT||8000
const DB_URL=process.env.DB_URL||"mongodb://localhost:27017/Photo-Beckend";

mongoose.connect(DB_URL).then(()=>{
    console.log("db connected");
    app.listen(PORT,()=>{
        console.log('server is running')
    })
}).catch((err)=>{
    console.log("connection error =>" ,err.message);
})

app.use(
    cors({
      origin: [
        "http://127.0.0.1:8000",
        "https://photo-studio-backend.onrender.com"
      ],
      credentials: true,
      methods: "GET,POST,PUT,DELETE",
    })
  );

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use("/api",router);
