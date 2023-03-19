const mongoose=require('mongoose');

const detailsSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:'User',
        required:true
    },
    detailsItems:{
            gainloose:{
                type:String,
                enum:['gain','loose'],
            },
            age:{
                type:Number,
                required:true
            },
            height:{
                type:Number,
                required:true
            },
            weight:{
                type:Number,
                required:true
            },
            target:{
                type:Number,
                required:true
            },
            time:{
                type:String,
                required:true
            }
    }
},{timestamps:true})

module.exports=mongoose.model('Details',detailsSchema);