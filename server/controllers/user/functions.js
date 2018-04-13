const config = require('../../config/config')
const jwt = require('jsonwebtoken')

module.exports = {
  jwtLoginUser (user) {
    const ONE_WEEK = 60 * 60
    return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
    })
  }
}
