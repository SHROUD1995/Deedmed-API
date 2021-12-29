
// import database
var db = require('../../../database/database')
//create model/schema for table
var Security = function(security) {
this.id = security.id
this.security_message = security.security_message
}

//Get Security model
Security.getResult = (result) => {
    db.query('SELECT * from security', (err,res)=>{
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


//Update Model
Security.updateSecurity=(id,data,result)=>{
     
    db.query('UPDATE security SET security_message=? WHERE id=?',
    [data.security_message,id],(err,res)=>{
        if(err)
        {
            console.log(err)
            result(null,err)
        }
        else
        {
            console.log("success")
            result(null,{status:true,message:"UPDATED",id:res.id})
        }
    })

}


module.exports = Security