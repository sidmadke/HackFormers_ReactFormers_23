const express=require('express');
const router=express.Router();

const { adddetails } = require('../controllers/details');

router.post('/adddetails',adddetails)

module.exports=router;