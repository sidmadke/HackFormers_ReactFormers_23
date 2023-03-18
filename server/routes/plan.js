const express=require('express');
const router=express.Router();
const { addPlan, getPlan } = require('../controllers/plan');

router.post('/addplan',addPlan);
router.get('/getplan',getPlan)

module.exports=router;