const bodyParser = require('body-parser')
const config = require('./config/config')
const {sequelize} = require('./models')
const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

// const morgan = require('morgan')
const app = express()
const server = require('http').Server(app)

// app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport/passport')

fs
  .readdirSync(path.join(__dirname, '/routes'))
  .forEach((file) => {
    app.use(`/${file.slice(0, -3)}`, require(`./routes/${file.slice(0, -3)}`))
  })

sequelize.sync({force: false})
  .then(() => {
    server.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
