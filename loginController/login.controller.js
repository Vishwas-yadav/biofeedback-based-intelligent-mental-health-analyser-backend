const login=require('../models/login');

module.exports={
    getLogin:(req,res,next)=>{
        login.find({},(err,result)=>{
            if(err){
                res.json({msg:"some error occured:"+err});
            }else{
                res.json(result);
            }
        });
    },
    postLogin:(req,res,next)=>{
        let newLogin=new login({
            email:req.body.email,
            password:req.body.password,
            userid:req.body.userid
        });
        newLogin.save((err,login)=>{
            if(err){
                res.json({msg:"Failed to add to db:"+err});
            }else{
                res.json({msg:"added Successfully!",val:login});
            }
        });

    },
    loginAuth:(req,res,next)=>{
        
        login.findOne({"email":req.body.email,"password":req.body.password},(err,result)=>{
            if(err){
                res.json({msg:"error",err:err});
            }else{
                res.json({msg:"logintrue","result":result});
            }
        });
    }
}