const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  process.env.PORT = 8080
  process.env.MONGODB_URI = 'mongodb://systers:systers2018@ds235461.mlab.com:35461/programs'
} else if (env === 'test') {
  process.env.PORT = 8080
  process.env.MONGODB_URI = 'mongodb://Divyam:systers2019@ds153814.mlab.com:53814/divyam_systers_test'
} else {
  process.env.MONGODB_URI = 'mongodb://systers:systers2018@ds235461.mlab.com:35461/programs'
}

console.log(JSON.stringify({ env, mongoUri: process.env.MONGODB_URI }, undefined, 2))
