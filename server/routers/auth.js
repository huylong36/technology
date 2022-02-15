const express = require('express')
const { register } =  require('../service/apiAuth')
const router = express.Router()

router.post('/register', async (req, res) => {
  return register(req,res)
})

module.exports = router