
// import database
var db = require('../../../database/database')
//create model/schema for table
var Privacy = function(privacy) {
this.id = privacy.id
this.privacy_message = privacy.privacy_message
}

//Get Privacy model
Privacy.getResult = (result) => {
    db.query('SELECT * from privacy', (err,res)=>{
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
Privacy.updatePrivacy=(id,data,result)=>{
     
    db.query('UPDATE privacy SET privacy_message=? WHERE id=?',
    [data.privacy_message,id],(err,res)=>{
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


module.exports = Privacy