import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import usersRouter from './routes/users.router.js'
import petsRouter from './routes/pets.router.js'
import adoptionsRouter from './routes/adoption.router.js'
import sessionsRouter from './routes/sessions.router.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import __dirname from './utils/index.js'
import morgan from 'morgan'

const app = express()
const PORT = process.env.PORT || 8080
const connection = mongoose.connect(
  "mongodb+srv://nicolas11258:0kCg8T4wNf5Ne0zc@cluster0.sy13hmr.mongodb.net/clase_40?retryWrites=true&w=majority",
)

app.use(morgan('dev'))

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Documentación de nuestra app para adoptar perritos',
      description:
        'Documentación que muestra todo lo que se puede hacer en AdoptMe',
    },
  },
  apis: [`${process.cwd()}/src/docs/**/*.yaml`],
}

const spec = swaggerJSDoc(swaggerOptions)
app.use('/api', swaggerUi.serve, swaggerUi.setup(spec))

app.use(express.json())
app.use(cookieParser())

app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/api/adoptions', adoptionsRouter)
app.use('/api/sessions', sessionsRouter)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
