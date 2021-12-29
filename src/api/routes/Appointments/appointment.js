const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const AppointmentsController = require("../../controllers/Appointments/Appointment");
 router.get('/', AppointmentsController.getList)
 router.get('/:appointment_id',AppointmentsController.getAppointmentsByID)
 router.get('/patient/:patient_id',AppointmentsController.getAppointmentsByPatientID)
 router.get(`/doctor/:doctor_id`,AppointmentsController.getAppointmentsByDoctorID)
 router.post('/create_appointment/',AppointmentsController.AddAppointments)
 router.delete('/delete/:appointment_id',AppointmentsController.deleteAppointments)
router.put('/update/:appointment_id',AppointmentsController.UpdateAppointments)
 //export router for getting access
 module.exports = router