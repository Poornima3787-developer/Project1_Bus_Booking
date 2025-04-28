const db=require('../utils/db-connection');
const {Op}=require('sequelize');
const Bus=require('../models/buses');

const addBusEntry=async (req,res)=>{
  try {
    const {busNumber,totalSeats,availableSeats}=req.body;
    const bus= await Bus.create({
      busNumber:busNumber,
      totalSeats:totalSeats,
      availableSeats:availableSeats
    })
    res.status(200).send('Bus details has been created');
  } catch (error) {
    res.status(500).send('Unable to make entry');
  }
  
}

const getBusEntry=async (req,res)=>{
   try {
    const seats = parseInt(req.params.seats);
    const busQuery=await Bus.findAll({
      where:{
        availableSeats:{
          [Op.gt]:seats
        }
      }
    });
    res.status(200).json(busQuery);
   } catch (error) {
    res.status(500).send('Unable to get');
   }
}

module.exports={
  addBusEntry,
  getBusEntry
}