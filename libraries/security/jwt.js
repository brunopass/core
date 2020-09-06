const jwt = require('jsonwebtoken')
const config = require('../../config')

const sign = payload => {
    return jwt.sign(payload, config.SECRET)
}

const verify = token => {
    return jwt.verify(token,config.SECRET)
}

module.exports = {
    sign,
    verify
}