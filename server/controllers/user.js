const User=require('../models/user');
const jwt=require('jsonwebtoken');

exports.signup=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error){
            console.log(error);
            return res.status(200).json({
                message:'Something went wrong'
            })
        }
        if(user){
            return res.status(400).json({
                message:'User already exist'
            })
        }

        const _user=new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            // age:req.body.age,
            // height:req.body.height,
            // weight:req.body.weight,
            // target:req.body.target,
            // time:req.body.time
        })

        _user.save((error,data)=>{
            if(error){
                console.log(error)
                return res.status(200).json({
                    message:'Something went wrong'
                })
            }
            if(data){
                return res.status(400).json({
                    message:'User created sucessfully!!'
                })
            }
        })
    })
}

exports.login=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error){
            console.log(error);
            return res.status(200).json({
                message:'Something went wrong'
            })
        }
        if(user){
            if(user.authenticate(req.body.password)){
                const token=jwt.sign({_id:user._id},"test",{expiresIn:'1h'})
                return res.status(200).json({
                    token,user
                })
            }
            else{
                return res.status(200).json({
                    message:'Enter Valid Password'
                })
            }
        }
    })
}
