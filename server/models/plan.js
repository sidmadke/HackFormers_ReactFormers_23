const mongoose=require('mongoose');

const planSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:'User',
        required:true
    },
    Workout_Plan:{
        type:Array,
        required:true
    },
    Diet_Plan:{
        type:Array,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Plan',planSchema);