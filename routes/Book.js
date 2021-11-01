const express = require('express')
const {bookEmployee, viewBookings, addDetails} = require('../controllers/Book')
const {protect, authorize} = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/', protect, authorize('employer', 'admin'), bookEmployee);
router.get('/all', protect, authorize('employer', 'admin'), viewBookings);


module.exports = router