const config = require('../../config/config')
const speakeasy = require('speakeasy')
const jwt = require('jsonwebtoken')

module.exports = {
  jwtLoginUser (user) {
    const ONE_WEEK = 60 * 60
    return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: ONE_WEEK
    })
  },
  generateToken () {
    let token = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for (let i = 0; i < 4; i++) {
      token += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return token
  }
}
