const express=require('express');
const busController=require('../controllers/busController')
const router=express.Router();

router.post('/buses',busController.addBusEntry);

router.get('/buses/available/:seats',busController.getBusEntry);

module.exports=router;