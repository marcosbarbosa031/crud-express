const jwt = require('jsonwebtoken')
const config = require('../../config/config')

module.exports = {
    jwtLoginUser (user) {
        const EXPIRATION = 60 * 60
        return jwt.sign(user, config.authentication.jwtSecret,{
            expiresIn: EXPIRATION
        })
    }
}