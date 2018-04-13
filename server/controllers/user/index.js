const { User } = require('../../models')
const functions = require('./functions')

async function getUsers () {
  return User.findAll()
}

module.exports.AuthenticationController = {
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        },
        attributes: ['id', 'email', 'password', 'name']
      })
      if (user) {
        const isPasswordValid = await user.comparePassword(password)
        if (isPasswordValid) {
          res.send({
            user: {
              id: user.id,
              email: user.email,
              name: user.name
            },
            token: functions.jwtLoginUser({ id: user.id })
          })
          return
        } else {
          var response = {
            error: 1,
            message: 'Senha incorreta.'
          }
        }
      } else {
        response = {
          error: 2,
          message: 'Email não cadastrado.'
        }
      }

      return res.status(403).send({
        response
      })
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 3,
        message: err.message
      })
    }
  },
  async register (req, res) {
    try {
      const email = req.body.email
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (user) {
        return res.status(403).send({
          error: 1,
          message: 'Email já cadastrado.'
        })
      }
      await User.create(req.body)
      res.send({
        success: true
      })
    } catch (err) {
      console.log(err.message)
      res.status(500).send({
        error: 3,
        message: err.message
      })
    }
  },
  async list (req, res) {
    res.send(await getUsers())
  }
}
