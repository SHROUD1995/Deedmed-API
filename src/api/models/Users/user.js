
// import database
var db = require('../../database/database')
//create model/schema for table
var Users = function(users) {
this.id= users.id
this.first_name = users.first_name;
this.last_name = users.last_name;
this.user_name = users.last_name;
this.email = users.email;
this.password = users.password;
this.user_type = users.user_type;
this.phone_no = users.phone_no;
}

//Get users model
Users.getResult = (result) => {
    db.query('SELECT * from users', (err,res)=>{
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

//Get users by ID model
Users.getUsersByID=(id,result)=>{
    db.query('SELECT * from users WHERE id=?',id,(err,res)=>{
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

//Get users by Ratings model
Users.getusersByRatings=(id,result)=>{
    db.query('SELECT * from users WHERE star_rating=?',id,(err,res)=>{
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
Users.getUsersByProduct=(id,result)=>{
    db.query('SELECT * from users WHERE product_id=?',id,(err,res)=>{
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
Users.getUsersByUserID=(id,result)=>{
    db.query('SELECT * from users WHERE id = `?`',id,(err,res)=>{
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
Users.createUsers=(EmpReqData, result)=>{
    db.query('INSERT into users SET ?', EmpReqData,(err,res)=>{
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
Users.updateUsers=(id,data,result)=>{

    db.query('UPDATE users SET first_name=?, last_name=?, user_name=?, email=?, password=?, user_type=?, phone_no=? WHERE id=?',
    [data.first_name,data.last_name,data.user_name,data.email,data.password,data.user_type,data.phone_no,id],(err,res)=>{
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
Users.deleteUsers = (id,result)=>{
    db.query('DELETE FROM users WHERE id=?',[id],(err,res)=>{
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
module.exports = Users