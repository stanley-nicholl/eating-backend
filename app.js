const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./db/db')

if(!process.env.PORT) app.use(morgan('dev'))

app.use(cors())
app.use(bodyParser.json())
app.disable('x-powered-by')

const restaurants = './routes/restaurants'
const users = './routes/users'
app.use('/restaurants', restaurants)
app.use('/users', users)

const use((req, res, next) => {
  const status = 404
  const message = `Could not find matching route for: ${req.method}${req.path}`
  next({ status, method })
})

const use((err, req, res, next) => {
  if(!process.env.NODE_ENV) console.log(err)
  const status = err.status || 500
  const message = err.message || 'Something borked out hard'
  res.status(status).json({ error: { message } })
})

const listener = console.log(`Listening on port ${port}`);
app.listen(port, listener)

module.exports = app
