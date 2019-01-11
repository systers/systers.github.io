const expect = require('expect')
const request = require('supertest')
const { ObjectID } = require('mongodb')

const { app } = require('../server')
const { Model } = require('../db/models/User')

const users = [{ STUDENT: 'test1', _id: new ObjectID() },
  { STUDENT: 'test2', _id: new ObjectID() }]

beforeEach(function (done) {
  this.timeout(0)
  Model.remove({}).then(() => {
    return Model.insertMany(users)
  }).then(() => done())
})

describe('GET /api/getUser', () => {
  it('should get all users', (done) => {
    request(app)
      .get('/api/getUser')
      .expect(200)
      .expect((res) => {
        expect(res.body.length).toBe(2)
      })
      .end(done)
  }).timeout(10000)
})

describe('POST /api/deleteUser', () => {
  it('should delete a user by id', (done) => {
    request(app)
      .post('/api/deleteUser')
      .send({ id: users[0]._id.toHexString() })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        Model.findById(users[0]._id.toHexString()).then((user) => {
          expect(user).toBeFalsy()
          done()
        }).catch(e => done(e))
      })
  }).timeout(10000)
})

describe('POST /api/SaveUser', () => {
  it('should save a new user', (done) => {
    const _id = new ObjectID().toHexString()
    request(app)
      .post('/api/SaveUser')
      .send({
        _id,
        PROGRAM: 'test',
        YEAR: 'test',
        PROJECT: 'test',
        STUDENT: 'test',
        PROJECTMANAGERANDMENTOR: 'test',
        MENTORS: 'test',
        mode: 'Save'
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        Model.findById(_id).then((user) => {
          expect(user).toBeTruthy()
          done()
        }).catch(e => done(e))
      })
  }).timeout(10000)
  it('should update an existing user', (done) => {
    request(app)
      .post('/api/SaveUser')
      .send({
        id: users[1]._id.toHexString(),
        PROGRAM: 'Update test',
        YEAR: 'Update test',
        PROJECT: 'Update test',
        STUDENT: 'Update test',
        PROJECTMANAGERANDMENTOR: 'Update test',
        MENTORS: 'Update test'
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        Model.findById(users[1]._id.toHexString()).then((user) => {
          expect(user).toBeTruthy()
          expect(user.STUDENT).toBe('Update test')
          done()
        }).catch(e => done(e))
      })
  }).timeout(10000)
})

describe('GET *', () => {
  it('should render homepage of the website', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done)
  })
})
