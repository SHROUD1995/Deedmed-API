const express = require('express')
 //import router
 const router = express.Router()

 //import employee controller
 const reviewController = require("../../controllers/Reviews/reviews");
 router.get('/', reviewController.getList)
 router.get('/:id',reviewController.getReviewsByID)
 router.get('/ratings/:star_rating',reviewController.getReviewsByRatings)
 router.get('/product/:product_id',reviewController.getReviewsByProduct)
 router.get(`/user/:review_for`,reviewController.getReviewsByUserID)
 router.post('/',reviewController.AddReviews)
 router.delete('/delete/:id',reviewController.deleteReviews)
router.put('/update/:id',reviewController.UpdateReviews)
 //export router for getting access
 module.exports = router