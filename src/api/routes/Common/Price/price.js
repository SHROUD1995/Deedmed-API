const express = require('express')
 //import router
 const router = express.Router()

 //import Price controller
 const PriceController = require("../../../controllers/Common/Price/price");
 router.put('/update/:id',PriceController.UpdatePrice)
 //export router for getting access
 module.exports = router