import cluster from 'cluster'
import process from 'process'
import { cpus } from 'os'
import express from 'express'

if (cluster.isPrimary) {
    console.log(
        `Soy un proceso primario con id: ${process.pid} y estoy creando workers`
    )
    const numCpus = cpus().length

    for (let i = 0; i < numCpus; i++) {
        console.log('creando worker')
        cluster.fork()
    }

    cluster.on('message', (worker, message) => {
        console.log(message)
    })

    cluster.on('exit', () => {
        cluster.fork()
    })
} else {
    // server()
    const app = express()
    process.send(`Soy el worker ${process.pid} y te hablo desde el servidor`)
  
    app.get('/', (req, res) => {
        res.json({ message: `Atendido por el worker ${process.pid}` })
    })
  
    app.get('/easy', (req, res) => {
        let sum = 0
        for (let i = 0; i < 10000; i++) {
            sum += i
        }
  
        console.log(
            `Soy el worker ${process.pid} y el resultado de la suma easy es ${sum}`
        ),
        res.json({
            message: `Soy el worker ${process.pid} y el resultado de la suma easy es ${sum}`,
        })
    })
  
    app.get('/hard', (req, res) => {
        let sum = 0
        for (let i = 0; i < 5e7; i++) {
            sum += i
        }
  
        console.log(
            `Soy el worker ${process.pid} y el resultado de la suma hard es ${sum}`
        )
        res.json({
            message: `Soy el worker ${process.pid} y el resultado de la suma hard es ${sum}`,
        })
    })
  
    app.listen(8080, () => {
        console.log(`Soy un server worker en puerto 3001 con id: ${process.pid}`)
    })
  }