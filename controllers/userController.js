const db=require('../utils/db-connection');
const User=require('../models/user');

const addEntry=async (req,res)=>{
  try {
    const {name,email}=req.body;
    const user=await User.create({
      name:name,
      email:email
    })
    res.status(200).send(`User with name ${name} is created`);
  } catch (error) {
    res.status(500).send('Unable to make entry');
  } 
}

const getEntry=async (req,res)=>{
   try {
    const getQuery=await User.findAll();
    res.status(200).json(getQuery);
   } catch (error) {
    res.status(500).send('Unable to get');
   }
}

module.exports={
  addEntry,
  getEntry
}