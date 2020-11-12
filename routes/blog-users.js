const express = require('express')
const router = express.Router();
const userController = require('../controllers/users-controllers')

router.get('/',  (req, res) => {
  res.json({users: 'users ok'})
})

router.post('/signup', userController.signupUser)

module.exports = router;