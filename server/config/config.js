module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'heroku_ab1289e377c98a2',
    user: 'bcaa1c8748f61e',
    password: '7c09f915',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'us-cdbr-iron-east-05.cleardb.net',
      storage: './safe.mysql',
      logging: false
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || '4683215'
  }
}
