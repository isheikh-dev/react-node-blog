const express = require('express')
const {signup} = require('../controllers/auth')
const router = express.Router()
// validator
const {runValidation} = require('../validators')
const {userSignupValidator} = require('../validators/auth')
router.post('/signup' , userSignupValidator , runValidation ,  signup)
// test
module.exports = router