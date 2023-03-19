const User=require('../models/user');
const Details=require('../models/details');

exports.adddetails=(req,res)=>{
    User.findOne({id:req.body.user})
    .exec((error,user)=>{
        if(error){
            console.log(error);
            return res.status(200).json({
                message:'Something went wrong'
            })
        }
        if(user){
            const { user,gainloose, age, height, weight, target, time } = req.body;
            const data = new Details({
                user,
                detailsItems: { gainloose,age, height, weight, target, time },
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
                {$set: {details:[data]}}
            )
            .exec((error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(400).json({error})
                }
                if(data){
                    console.log(data);
                    return res.status(200).json({data})
                }
            })
        }
        
    })
}

  