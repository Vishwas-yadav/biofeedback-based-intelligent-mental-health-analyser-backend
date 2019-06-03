const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum : ['male','female','other'],
        required:true
    },
    place:{
        type:String,
        required:true
    }
});
const user=module.exports=mongoose.model('user',userSchema);