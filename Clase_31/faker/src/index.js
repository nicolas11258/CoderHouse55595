const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use(cors())
app.use(morgan('dev'))

router(app)

app.listen(port, () => {
  console.log(`Server running at port port ${port}`)
})
