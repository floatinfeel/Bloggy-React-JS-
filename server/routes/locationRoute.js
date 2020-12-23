const express = require('express')
const router = express.Router()

const LocationController = require('../controllers/LocationController')

router.get('/', LocationController.read)
router.post('/', LocationController.create)
router.patch('/:id', LocationController.update)
router.delete('/:id', LocationController.delete)
router.get('/search', LocationController.search)

module.exports = router