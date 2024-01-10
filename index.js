const express=require("express");
const app=express();
const cors=require("cors");
const router=require("./routes")
const mongoose=require("mongoose");



mongoose.connect("mongodb://localhost:27017/Photo-Beckend").then(()=>{
    console.log("db connected");
    app.listen(8000,()=>{
        console.log('server is running')
    })
}).catch((err)=>{
    console.log("connection error =>" ,err.message);
})

app.use(
    cors({
      origin: [
        "http://localhost:8000",
      ],
      credentials: true,
      methods: "GET,POST,PUT,DELETE",
    })
  );


app.use(express.static('public'));
app.use(express.json());
app.use("/api",router);
