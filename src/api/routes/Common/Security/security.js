const express = require('express')
 //import router
 const router = express.Router()

 //import Security controller
 const SecurityController = require("../../../controllers/Common/Security/security");
 router.get('/', SecurityController.getList)
 router.put('/update/:id',SecurityController.UpdateSecurity)
 //export router for getting access
 module.exports = router