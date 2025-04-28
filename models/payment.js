const {Sequelize,DataTypes}=require('sequelize');
const {sequelize}=require('../utils/db-connection');

const Payment=sequelize.define('Payment',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
  },
  ammountPaid:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  paymentStatus:{
    type:DataTypes.STRING,
    allowNull:false
  }
})

module.exports=Payment;