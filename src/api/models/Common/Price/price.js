
// import database
var db = require('../../../database/database')
//create model/schema for table
var Price = function(Price) {
this.id = Price.id
this.hourly_rate = Price.hourly_rate
}

//Update Model
Price.updatePrice=(id,data,result)=>{
     
    db.query('UPDATE users SET hourly_rate=? WHERE id=?',
    [data.hourly_rate,id],(err,res)=>{
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


module.exports = Price