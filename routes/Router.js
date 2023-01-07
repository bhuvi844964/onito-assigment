const movieController = require("../controllers/movieController")
const ratingController = require("../controllers/ratingController")

// router
const router = require('express').Router()


// movie api
router.post('/new-movie', movieController.addMovie)

router.get('/longest-duration-movies', movieController.getAllMovie)


// rating api
router.get('/top-rated-movies', ratingController.getAllRating)


module.exports = router