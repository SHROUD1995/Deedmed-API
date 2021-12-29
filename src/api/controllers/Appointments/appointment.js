var module = require('../../models/Appointments/Appointment')

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

//Get appointments by appointmentID
exports.getAppointmentsByID= (req,res)=>{
   module.getAppointmentsByID(req.params.id,(err,Appointments)=>{
      if(err)
      {
         res.send(err)
      }
      else{
         console.log("Single Appointments data",Appointments)
         res.send(Appointments)
      }

   })
}

//Get appointments by DoctorID

exports.getAppointmentsByDoctorID= (req,res)=>{
    module.getAppointmentsByDoctorID(req.params.doctor_id,(err,Appointments)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single Appointments data",Appointments)
          res.send(Appointments)
       }
 
    })
 }

//Get appointments by PatientID

exports.getAppointmentsByPatientID= (req,res)=>{
    module.getAppointmentsByPatientID(req.params.patient_id,(err,Appointments)=>{
       if(err)
       {
          res.send(err)
       }
       else{
          console.log("Single Appointments data",Appointments)
          res.send(Appointments)
       }
 
    })
 }

exports.AddAppointments=(req,res)=>{
   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.createAppointments(data,(err,emp)=>{
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


//Update Appointments model
exports.UpdateAppointments=(req,res)=>{

   const data = new module(req.body)   
   console.log("request data", req.body)

   if(req.body.constructor === Object && Object.keys(req.body).length===0)
   {
      res.send(400).send({success:false,message:"Please fill up all the fields"})
   }
   else{
      module.updateAppointments(req.params.appointment_id,data,(err,emp)=>{
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


//Delete Appointments

exports.deleteAppointments = (req,res) =>{
   module.deleteAppointments(req.params.appointment_id,(err,result)=>{
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