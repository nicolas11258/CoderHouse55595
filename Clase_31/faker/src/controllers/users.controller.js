const { Router } = require('express')
const generateUsers = require('../utils/mock.util')

const router = Router()

router.get('/', (req, res) => {
  const { numUsers = 1 } = req.query
  const user = generateUsers(numUsers)

  res.json({ message: user })
})

module.exports = router
