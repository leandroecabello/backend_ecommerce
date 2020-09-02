const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

// Initialize
const app = express()

// Config
app.set('port', process.env.PORT || 3000)

// Middlewares
app
    .use(morgan('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())

// Routes


// Page Not founded
app.use((req, res) =>{
    res.status(404).json({
        msg: 'Page not founded'
    })
})

module.exports = app