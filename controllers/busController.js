const db=require('../utils/db-connection');

const addBusEntry=(req,res)=>{
  const {busNumber,totalSeats,availableSeats}=req.body;
  const addBusQuery='INSERT INTO Bus (busNumber,totalSeats,availableSeats) VALUES (?,?,?)';
  db.execute(addBusQuery,[busNumber,totalSeats,availableSeats],(err)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    console.log('Added a bus details');
    res.status(200).send(`Bus added successfully bus number ${busNumber} `);
  })
}

const getBusEntry=(req,res)=>{
  const seats = parseInt(req.params.seats);
  const getBusEntry='SELECT *FROM Bus WHERE availableSeats>?';
  db.execute(getBusEntry,[seats],(err,result)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    console.log("Retrieved all buses with more than the specified no.of available seats");
    res.status(200).send(result);
  })
}

module.exports={
  addBusEntry,
  getBusEntry
}