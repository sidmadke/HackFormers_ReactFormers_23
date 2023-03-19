const express=require('express');
const router=express.Router();
const { addPlan, getPlan } = require('../controllers/plan');

router.post('/addplan',addPlan);
router.post('/getplan',getPlan);

module.exports=router;