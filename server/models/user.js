const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    hash_pass:{
        type:String,
        required:true
    },
    details: {
        type: [{type:mongoose.Schema.Types.ObjectId,ref:'Details'}]
    },
    plan: {
        type: [{type:mongoose.Schema.Types.ObjectId,ref:'Plan'}]
    }
},{timestamps:true})

userSchema.virtual('password').set(function(password){
    this.hash_pass=bcrypt.hashSync(password,10)
});

userSchema.methods={
    authenticate: function(password){
        return bcrypt.compareSync(password,this.hash_pass)
    }
}

module.exports=mongoose.model('User',userSchema);