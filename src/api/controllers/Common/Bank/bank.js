var module = require('../../../models/Common/Bank/bank')


//Create Bank details Model
exports.AddBank=(req,res)=>{
    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.createBank(data,(err,emp)=>{
          if(err)
          {
             res.send(err)
          }
          else{
             res.json({status:true, message:"Success",data:emp.InsertId})
          }
       })
       console.log("valid data")
    }
 }

 //Get bank Details by ID
 exports.getBankByUserID= (req,res)=>{
    module.getBankByUserID(req.params.user_id,(err,Bank)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single Bank data",Bank)
          res.send(Bank)
       }
 
    })
 }

 
//Update Bank model
exports.UpdateBank=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateBank(req.params.user_id,data,(err,emp)=>{
         if(err)
         {
            res.send(err)
         }
         else{
            res.json({status:true, message:"Success",data:emp.InsertId})
         }
      })
      console.log("valid data")
   }

}


