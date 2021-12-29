var module = require('../../../models/Common/Security/security')

exports.getList = (req,res) =>{
   // console.log("complete list here")
   module.getResult((err,emp)=>{
       if(err)
       {
          res.send(err)
       }
       console.log(emp)
       res.send(emp)
   })
}

//Update Security model
exports.UpdateSecurity=(req,res)=>{

    const data = new module(req.body)   
    console.log("request data", req.body)
 
    if(req.body.constructor === Object && Object.keys(req.body).length===0)
    {
       res.send(400).send({success:false,message:"Please fill up all the fields"})
    }
    else{
       module.updateSecurity(req.params.id,data,(err,emp)=>{
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
 
