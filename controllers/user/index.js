const {User} = require('../../models')

module.exports.AuthenticationController = {
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.getUser({
                where:{
                    email: email
                },
                attributes: ['id', 'email', 'password', 'name']
            })
            if (user) {
                const isPasswordValid = await User.checkPassword(password)
                if (isPasswordValid) {
                    res.send({
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    })
                }
                else{
                    const response = {
                        error: 1,
                        message: "Senha incorreta."
                    }
                }
            }
            else{
                const response = {
                    error: 2,
                    message: "Email não cadastrado."
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
    }
}