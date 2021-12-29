var module = require('../../models/Users/user')

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

exports.getUsersByID= (req,res)=>{
   module.getUsersByID(req.params.id,(err,Users)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single Users data",Users)
         res.send(Users)
      }

   })
}

// Get Users by Ratings
exports.getUsersByRatings= (req,res)=>{
    module.getUsersByRatings(req.params.star_rating,(err,Users)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single Users data",Users)
          res.send(Users)
       }
 
    })
 }
 
//Update users by pricings

exports.updateUserPrices= (req,res)=>{
    module.getUsersByProduct(req.params.product_id,(err,Users)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single Users data",Users)
          res.send(Users)
       }
 
    })
 }

//Get ratings by UserID

exports.getUsersByUserID= (req,res)=>{
    module.getUsersByUserID(req.params.id,(err,Users)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single Users data",Users)
          res.send(Users)
       }
 
    })
 }


exports.AddUsers=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createUsers(data,(err,emp)=>{
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


//Update Users model
exports.UpdateUsers=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateUsers(req.params.id,data,(err,emp)=>{
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


//Delete Users

exports.deleteUsers = (req,res) =>{
   module.deleteUsers(req.params.id,(err,result)=>{
      if (err)
      {
         res.send(err)
      }
      else
      {
         res.json({status:true, message:"Deleted Successfully"})
      }

   })
}