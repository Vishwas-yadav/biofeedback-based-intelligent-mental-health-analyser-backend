const mongoose=require('mongoose');

const resultSchema=mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    testscore:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    }
});
const result=module.exports=mongoose.model('result',resultSchema);