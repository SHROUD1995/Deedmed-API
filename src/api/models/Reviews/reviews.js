
// import database
var db = require('../../database/database')
//create model/schema for table
var Reviews = function(Reviews) {
this.id = Reviews.id
this.review_for = Reviews.review_for;
this.review_by = Reviews.review_by;
this.reviews = Reviews.reviews;
this.ratings=Reviews.ratings;
this.date = Reviews.date
}

//Get Reviews model
Reviews.getResult = (result) => {
    db.query('SELECT * from reviews', (err,res)=>{
        if(err){
            console.log('error while fetching', err)
            result(null,err)
        }
        else {
            console.log('fetched successfully', res)
            result(null,res)
        }
    })
}

//Get Reviews by ID model
Reviews.getReviewsByID=(id,result)=>{
    db.query('SELECT * from reviews WHERE id=?',id,(err,res)=>{
        if(err)
        {
            console.log("error while fetching")
            result(null,err)

        }
        else{
            console.log("selected by ID")
            result(null,res)
        }
    })
}

//Get Reviews by Ratings model
Reviews.getReviewsByRatings=(id,result)=>{
    db.query('SELECT * from reviews WHERE star_rating=?',id,(err,res)=>{
        if(err)
        {
            console.log("error while fetching")
            result(null,err)

        }
        else{
            console.log("selected by ID")
            result(null,res)
        }
    })
}


//Get ratings by product
Reviews.getReviewsByProduct=(id,result)=>{
    db.query('SELECT * from reviews WHERE product_id=?',id,(err,res)=>{
        if(err)
        {
            console.log("error while fetching")
            result(null,err)

        }
        else{
            console.log("selected by ID")
            result(null,res)
        }
    })
}

//Get ratings by userID
Reviews.getReviewsByUserID=(id,result)=>{
    db.query('SELECT * from reviews WHERE review_for=?',id,(err,res)=>{
        if(err)
        {
            console.log("error while fetching")
            result(null,err)

        }
        else{
            console.log("selected by ID")
            result(null,res)
        }
    })
}

//Create model
Reviews.createReviews=(EmpReqData, result)=>{
    db.query('INSERT into reviews SET ?', EmpReqData,(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,{status:false, message:err})
        }
        else{
            console.log("Inserted succcessfully")
            result(null,{status:true,message:"Success"})
        }
    })

}

//Update Model
Reviews.updateReviews=(id,data,result)=>{
     
    db.query('UPDATE reviews SET title=?, slug=?, images=?, quantity=?, category=?, sub_category_id=?, brand_id=?,type_id=?, availability=?, description=?,  price=?, status=?, discount_type=?, allow_sale=?, is_deleted=?, added_on=?, added_by=? WHERE id=?',
    [data.title,data.slug,data.images,data.quantity,data.category,data.sub_category_id,data.brand_id,data.type_id,data.availability,data.description,data.price,data.status,data.discount_type,data.allow_sale,data.is_deleted,data.added_on,data.added_by,id],(err,res)=>{
        if(err)
        {
            console.log("Error while updating")
            result(null,err)
        }
        else
        {
            console.log("success")
            result(null,{status:true,message:"UPDATED",id:res.id})
        }
    })

}


//Delete model
Reviews.deleteReviews = (id,result)=>{
    db.query('DELETE FROM reviews WHERE id=?',[id],(err,res)=>{
        if(err)
        {
            console.log("Unable to delete")
            result(null,err)
        }
        else
        {
            console.log("Deleted successfully")
           result(null,res)
        }
    })
}
module.exports = Reviews