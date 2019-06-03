const user=require('../models/user');

module.exports={
    getUser:(req,res)=>{
        user.find({},(err,result)=>{
            if(err){
                res.json({msg:"some error occured:"+err});
            }else{
                res.json(result);
            }
        });
    },
    postUser:(req,res)=>{
        let newUser=new user({
            name:req.body.name,
            age:req.body.age,
            gender:req.body.gender,
            place:req.body.place
        });
        newUser.save((err,login)=>{
            if(err){
                res.json({msg:"Failed to add to db:"+err});
            }else{
                res.json({msg:"added Successfully!",user:login});
            }
        });
    },
    deleteUser:(req,res)=>{
        user.findByIdAndRemove(req.params.id,(err,result)=>{
            if(err){
          res.json({msg:"not deleted!"});
      }else{
          res.json({msg:"deleted successfully!"});
      }
      });
    },
    userbyid:(req,res)=>{
        user.find({_id:req.params.id},(err,result)=>{
            if(err){
                res.json({msg:"some error occured!"});
            }
            res.json(result);
        });
    }

}