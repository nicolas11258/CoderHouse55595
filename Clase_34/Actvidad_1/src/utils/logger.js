import winston from 'winston'

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: 'http' }),
        new winston.transports.File({ filename: './warnings.log', level: 'warn' }),
    ],
})

const addlogger = (req, res, next) => {
    req.logger = logger
    req.logger.http(
        `${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`
    )

    next()
}

module.exports = addlogger