const Joi = require('joi')

module.exports = {
  login (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('')
      )
    }

    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 1,
            message: 'O email inserido não é válido.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 2,
            message: 'Password deve conter um caracter maiúsculo, menúsculo, numeros e caracteres especiais.'
          })
          break
        default:
          res.status(400).send({
            error: 3,
            message: 'Algum erro inesperado.'
          })
      }
    } else {
      next()
    }
  },
  register (req, res, next) {
    const schema = {
      email: Joi.string().email()
    }

    const { error } = Joi.validate({ email: req.body.email }, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 1,
            message: 'O email inserido não é válido.'
          })
          break
        default:
          res.status(400).send({
            error: 3,
            message: 'Algum erro inesperado.'
          })
      }
    } else {
      next()
    }
  }
}
