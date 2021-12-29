const express = require('express')
 //import router
 const router = express.Router()

 //import Bank controller
 const BankController = require("../../../controllers/Common/Bank/bank");
 router.post('/',BankController.AddBank)
 router.put('/update/:user_id',BankController.UpdateBank)
 router.get('/:user_id',BankController.getBankByUserID)
 //export router for getting access
 module.exports = router