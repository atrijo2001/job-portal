const express = require('express')

const router = express.Router();
const {createUser, loginUser, verifyUser, getUserDetails} = require('../controllers/User')
const {protect} = require('../middleware/authMiddleware')

router.post('/', createUser);
router.post('/login', loginUser)
router.post('/verify', verifyUser)
router.get('/',protect, getUserDetails)

module.exports = router