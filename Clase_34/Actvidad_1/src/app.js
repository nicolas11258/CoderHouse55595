import express from 'express'
import router from './router/index.js'
import { addLogger } from './middlewares/logger.middleware.js'

const app = express()
const port = 3000

app.use(addLogger)

router(app)

app.listen(port, () => {
    console.log(`Server running at port port ${port}`)
})