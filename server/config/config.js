module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'express',
    user: 'root',
    password: null,
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: './safe.mysql',
      logging: false
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || '4683215'
  }
}
