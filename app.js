const express=require('express');
const db=require('./utils/db-connection');
const userRouter = require('./routes/userRoutes');
const busRouter = require('./routes/busRoutes');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Hello World");
})

app.use('/busBooking',userRouter);
app.use('/busBooking',busRouter);

app.listen(4000,(req,res)=>{
  console.log("Server is running");
})