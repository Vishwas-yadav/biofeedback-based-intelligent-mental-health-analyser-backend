const result=require('../models/result');

module.exports={
    getResult:(req,res)=>{
        result.find({},(err,result)=>{
            if(err){
                res.json({msg:"some error occured:"+err});
            }else{
                res.json(result);
            }
        });
    },
    postResult:(req,res,next)=>{
        let newResult=new result({
            userid:req.body.userid,
            testscore:req.body.testscore,
            date:req.body.date
        });
        newResult.save((err,result)=>{
            if(err){
                res.json({msg:"Failed to add to db:"+err});
            }else{
                res.json({msg:"added Successfully!"});
            }
        });
    },
    deleteResult:(req,res,next)=>{
        result.findByIdAndRemove(req.params.id,(err,result)=>{
              if(err){
            res.json({msg:"not deleted!"});
        }else{
            res.json({msg:"deleted successfully!"});
        }
        });
    },
    checkOnceGivenTest:(req,res,next)=>{
        result.find({userid:req.params.id},(err,result)=>{
            if(err){
                res.json({msg:"error at backend!",err:err});
            }else{
                res.json(result);

            }
        });
    },
    findLastTestGivenById:(req,res,next)=>{
        result.find({userid:req.params.id}).sort({$natural:-1}).exec((err,result)=>{
            if(err){
                res.json({msg:"error at backend!",err:err});
            }else{
                res.json(result);
            }
        });
    }

}