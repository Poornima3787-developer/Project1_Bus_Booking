const express=require('express');

const {sequelize}=require('./utils/db-connection');

const userModel=require('./models/user');
const busModel=require('./models/buses');
const bookingModel=require('./models/booking');
const paymentModel=require('./models/payment');

const userRouter = require('./routes/userRoutes');
const busRouter = require('./routes/busRoutes');

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Hello World");
})

sequelize.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error syncing the database:", err);
  });

app.use('/busBooking',userRouter);
app.use('/busBooking',busRouter);
