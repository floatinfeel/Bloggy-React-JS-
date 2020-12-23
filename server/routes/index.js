const express = require('express')
const LocationController = require('../controllers/LocationController')
const router = express.Router()

const locationRoutes = require('./locationRoute')

router.use('/', locationRoutes)
// router.get('/search', LocationController.search)

module.exports = router