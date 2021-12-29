var module = require('../../models/Reviews/reviews')

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

exports.getReviewsByID= (req,res)=>{
   module.getReviewsByID(req.params.id,(err,Reviews)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single reviews data",Reviews)
         res.send(Reviews)
      }

   })
}

// Get reviews by Ratings
exports.getReviewsByRatings= (req,res)=>{
    module.getReviewsByRatings(req.params.star_rating,(err,Reviews)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single reviews data",Reviews)
          res.send(Reviews)
       }
 
    })
 }
 
//Get ratings by product

exports.getReviewsByProduct= (req,res)=>{
    module.getReviewsByProduct(req.params.product_id,(err,Reviews)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single reviews data",Reviews)
          res.send(Reviews)
       }
 
    })
 }

//Get ratings by UserID

exports.getReviewsByUserID= (req,res)=>{
    module.getReviewsByUserID(req.params.review_for,(err,Reviews)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single reviews data",Reviews)
          res.send(Reviews)
       }
 
    })
 }


exports.AddReviews=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createReviews(data,(err,emp)=>{
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


//Update Reviews model
exports.UpdateReviews=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateReviews(req.params.id,data,(err,emp)=>{
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


//Delete Reviews

exports.deleteReviews = (req,res) =>{
   module.deleteReviews(req.params.id,(err,result)=>{
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