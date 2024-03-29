const mongoose=require('mongoose');

const loginSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
});

const login=module.exports=mongoose.model('login',loginSchema);