const User=require('../models/user');
const Plan=require('../models/plan')

exports.addPlan=(req,res)=>{
    console.log("addplan");
    User.findOne({id:req.body.user})
    .exec((error,user)=>{
        if(error){
            console.log(error);
            return res.status(200).json({
                message:'Something went wrong'
            })
        }
        if(user){
            const { user,Workout_Plan,Diet_Plan} = req.body;
            const data = new Plan({
                user,
                Workout_Plan,
                Diet_Plan
            })
            
            data.save((error,details)=>{
                if(error){
                    console.log(error)
                }
                if(details){
                    console.log(details)
                }
            })

            User.updateOne(
                {_id:req.body.user},
                {$set: {plan:[data]}}
            )
            .exec((error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(200).json({error})
                }
                if(data){
                    console.log(data);
                    return res.status(400).json({data})
                }
            })
        }
    })
}

exports.getPlan=(req,res)=>{
    Plan.findOne({user:req.body.user})
    .exec((error,plan)=>{
        if(error){
            return res.status(400).json({error})
        }
        if(plan){
            return res.status(200).json({plan})
        }
    })
}