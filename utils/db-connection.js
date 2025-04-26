const mysql=require('mysql2');

const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Poornima@3787',
  database:'booking_app'
});

connection.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("Connection has been created");
  const userQuery=`create table IF NOT EXISTS User(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100)
  )`
  const busQuery=`create table IF NOT EXISTS Bus(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(50),
    totalSeats INT,
    availableSeats INT
    )`
  const bookingQuery=`create table IF NOT EXISTS Booking(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
    )`
  const paymentQuery=`create table IF NOT EXISTS Payment(
    id INT AUTO_INCREMENT PRIMARY KEY,
    ammountPaid INT,
    paymentStatus VARCHAR(100)
    )`
 
  connection.execute(userQuery,(err)=>{
    if(err){
      console.log(err);
      connection.end();
      return;
    }
    console.log("User table is created");
  })

  connection.execute(busQuery,(err)=>{
    if(err){
      console.log(err);
      connection.end();
      return;
    }
    console.log("Bus table is created");
  })

  connection.execute(bookingQuery,(err)=>{
    if(err){
      console.log(err);
      connection.end();
      return;
    }
    console.log("Booking table is created");
  })

  connection.execute(paymentQuery,(err)=>{
    if(err){
      console.log(err);
      connection.end();
      return;
    }
    console.log("Payment table is created");
  })
})

module.exports=connection;