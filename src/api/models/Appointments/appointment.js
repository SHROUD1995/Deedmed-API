
// import database
var db = require('../../database/database')
//create model/schema for table
var Appointments = function(appointment) {
this.id = appointment.id
this.appointment_id = appointment.appointment_id;
this.doctor_id = appointment.doctor_id;
this.patient_id = appointment.patient_id;
this.appointment_title=appointment.appointment_title;
this.appointment_reason = appointment.appointment_reason;
this.appointment_time = appointment.appointment_time;
this.appointment_date = appointment.appointment_date;
this.appointment_status = appointment.appointment_status;
}

//Get Appointments model
Appointments.getResult = (result) => {
    db.query('SELECT * from Appointment', (err,res)=>{
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

//Get Appointments by ID model
Appointments.getAppointmentsByID=(id,result)=>{
    db.query('SELECT * from Appointment WHERE appointment_id=?',id,(err,res)=>{
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

//Get Appointments by DoctorID
Appointments.getAppointmentsByDoctorID=(id,result)=>{
    db.query('SELECT * from Appointment WHERE doctor_id=?',id,(err,res)=>{
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

//Get Appointment by PatientID
Appointments.getAppointmentsByPatientID=(id,result)=>{
    db.query('SELECT * from Appointment WHERE patient_id=?',id,(err,res)=>{
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
Appointments.createAppointments=(EmpReqData, result)=>{
    db.query('INSERT into Appointment SET ?', EmpReqData,(err,res)=>{
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
Appointments.updateAppointments=(id,data,result)=>{
     
    db.query('UPDATE Appointment SET appointment_id=?, doctor_id=?, patient_id=?, appointment_title=?, appointment_reason=?, appointment_time=?, appointment_date=?,appointment_status=? WHERE appointment_id=?',
    [data.appointment_id,data.doctor_id,data.patient_id,data.appointment_title,data.appointment_reason,data.appointment_time,data.appointment_date,data.appointment_status,id],(err,res)=>{
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
Appointments.deleteAppointments = (id,result)=>{
    db.query('DELETE FROM Appointment WHERE appointment_id=?',[id],(err,res)=>{
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
module.exports = Appointments