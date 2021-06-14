const router = require('express').Router()
const user = require("../controller/user")
// const admin = require("../controllers/admin")
// const weather = require('../controllers/weather')

//user
router.post('/createUser', user.createUser)
router.get('/getAllUsers', user.getAllUsers)

// //admin
// router.post('/loginAdmin', admin.loginAdmin)
// router.post('/createAdmin', admin.createAdmin)
// router.get('/getAllUsers', admin.getAllUsers)

module.exports = router