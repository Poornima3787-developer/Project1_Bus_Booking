const express=require('express');
const userController=require('../controllers/userController');
const router=express.Router();

router.post('/users',userController.addEntry);

router.get('/users',userController.getEntry)

module.exports=router;