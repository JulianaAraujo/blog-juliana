const express = require('express')
const router = express.Router();
const userController = require('../controllers/users-controllers')

router.get('/test', () => {
  //
}, (req, res) => {
  res.json({users: 'users ok'})
})

router.get('/signup', userController.signupUser)

module.exports = router;