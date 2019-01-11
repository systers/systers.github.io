require('./config/keys')

var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongo = require('mongoose')
const { connectToDb } = require('./db/connection')
const { handleUserGet, handleUserDelete, handleUserSave } = require('./controllers/User')

connectToDb(mongo, process.env.MONGODB_URI)
  .then((res) => {
    console.log('Database connection details:-')
    console.log(JSON.stringify(res, undefined, 2))
  })
  .catch((err) => { console.log(err.message) })

var app = express()
app.use(bodyParser())
app.use(bodyParser.json({
  limit: '5mb'
}))
app.use(bodyParser.urlencoded({
  extended: true
}))

var distDir = __dirname + '/dist/'
app.use(express.static(distDir))

const { Model } = require('./db/models/User')

app.post('/api/SaveUser', handleUserSave(Model))
app.post('/api/deleteUser', handleUserDelete(Model))
app.get('/api/getUser', handleUserGet(Model))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(process.env.PORT, () => {
  console.log('App listening on port 8080!\n')
})

module.exports = { app }
