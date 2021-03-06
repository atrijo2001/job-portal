const express = require('express')

const router = express.Router();
const {createUser, loginUser, verifyUser, getUserDetails, getEmployeeDetails} = require('../controllers/User')
const {protect, authorize} = require('../middleware/authMiddleware')

router.post('/', createUser);
router.post('/login', loginUser)
router.post('/verify', verifyUser)
router.get('/',protect, getUserDetails)
router.get('/all', protect, authorize('employer'), getEmployeeDetails)

module.exports = router