// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// GET all appointments by doctor ID
router.get('/appointments', doctorController.getAppointmentsByDoctor);

// GET doctor details by doctor ID
router.get('/details', doctorController.getDoctorDetails);

// UPDATE appointment status
router.put('/appointment/:appointmentId', doctorController.updateAppointmentStatus);

router.get('/list', doctorController.getAllDoctors);
router.get('/appointments', doctorController.getPendingAppointments); 


router.get('/appointments/doctor/history/:doctorId', doctorController.getDoctorAppointments);
router.delete("/delete/:id", doctorController.deleteDoctor);
router.put("/update/:id", doctorController.updateDoctor);

module.exports = router;
