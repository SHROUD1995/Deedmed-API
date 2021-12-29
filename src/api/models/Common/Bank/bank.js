
// import database
var db = require('../../../database/database')
//create model/schema for table
var Bank = function(Bank) {
this.id = Bank.id
this.user_id = Bank.user_id
this.account_holder_name = Bank.account_holder_name
this.bank_name = Bank.bank_name
this.branch = Bank.branch
this.account_no = Bank.account_no
}

//Create Bank
Bank.createBank=(EmpReqData, result)=>{
    db.query('INSERT into bank SET ?', EmpReqData,(err,res)=>{
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
Bank.updateBank=(id,data,result)=>{
     
    db.query('UPDATE bank SET account_holder_name = ? , bank_name = ? , branch = ? , account_no = ? WHERE user_id = ?',
    [data.account_holder_name , data.bank_name, data.branch,data.account_no,id],(err,res)=>{
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

//Get Bank by ID model
Bank.getBankByUserID=(id,result)=>{
    db.query('SELECT * from bank WHERE user_id=?',id,(err,res)=>{
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



module.exports = Bank