import express from 'express'
import mongoose from 'mongoose'
import sessionsRouter from './routes/sessions.router.js'
import { faker } from '@faker-js/faker'

const app = express()
const PORT = 3000
const connection = mongoose.connect(
    "mongodb+srv://nicolas11258:0kCg8T4wNf5Ne0zc@cluster0.sy13hmr.mongodb.net/clase_34?retryWrites=true&w=majority"
)

app.use(express.json())

app.use('/api/sessions', sessionsRouter)

//Este endpoint sirve para poder crear el usuario virtual con variables para utilizar en el resto de endpoints
app.get('/api/test/user', (req, res) => {
  let first_name = faker.name.firstName()
  let last_name = faker.name.lastName()
  let email = faker.internet.email()
  let password = faker.internet.password()
  res.send({ first_name, last_name, email, password })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))