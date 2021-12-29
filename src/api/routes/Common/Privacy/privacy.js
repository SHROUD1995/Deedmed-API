const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const PrivacyController = require("../../../controllers/Common/Privacy/privacy");
 router.get('/', PrivacyController.getList)
 router.put('/update/:id',PrivacyController.UpdatePrivacy)
 //export router for getting access
 module.exports = router