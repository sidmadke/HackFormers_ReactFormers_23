const express=require('express');
const { run } = require('../controllers/openai');
const router=express.Router();

router.post('/openai',run)

module.exports=router;