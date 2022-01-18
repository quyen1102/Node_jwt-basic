const express = require('express')
const router = express.Router()


const {
    login,
    dashboard
} = require('../controller/LoginController')
const authenticationMiddleware = require('../middleware/auth')

// router.post('/login', login )
router.route('/login').post(login)
router.route('/dashboard').get(authenticationMiddleware, dashboard)

module.exports = router