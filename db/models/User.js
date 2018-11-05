const mongoose = require('mongoose')
var Schema = mongoose.Schema

const UsersSchema = new Schema({
  PROGRAM: {
    type: String
  },
  YEAR: {
    type: String
  },
  PROJECT: {
    type: String
  },
  STUDENT: {
    type: String
  },
  PROJECTMANAGERANDMENTOR: {
    type: String
  },
  MENTORS: {
    type: String
  }
}, {
  versionKey: false
})

const Model = mongoose.model('users', UsersSchema, 'users')

module.exports = {
  Model
}
