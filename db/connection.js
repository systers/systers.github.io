const connectToDb = (mongo, mongoURI) => {
  return new Promise((resolve, reject) => {
    mongo.connect(mongoURI, { useNewUrlParser: true }, (err, response) => {
      if (err) {
        reject(new Error('Could not connect to database'))
      } else {
        const { name, host, port, user, pass } = response
        resolve({
          name,
          host,
          port,
          user,
          pass
        })
      }
    })
  })
}

module.exports = {
  connectToDb
}
