const db=require('../utils/db-connection');

const addEntry=(req,res)=>{
  const {name,email}=req.body;
  const addQuery='INSERT INTO user (name,email) VALUES (?,?)';
  db.execute(addQuery,[name,email],(err)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    console.log("Added a new user");
    res.status(200).send(`User with name ${name} successfully added`);
  })
}

const getQuery=(req,res)=>{
  const getQuery='SELECT * FROM user';
  db.execute(getQuery,(err,result)=>{
    if(err){
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    console.log("Retrieve all users from the database");
    res.status(200).send(result);
  })

}

module.exports={
  addEntry,
  getQuery
}