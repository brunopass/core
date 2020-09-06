const express = require('express')
const restorePassword = require('../services/node/users/restorePassword')
const { onSuccess, onError } = require('../services/node/network/response')
const router = express.Router()

router.patch('/restore', (req,res) => {
    restorePassword(
        req.body.uri,
        req.body.email,
        req.body.password
    )
    .then(ok=>{
        onSuccess(res,ok)
    })
    .catch(err => {
        onError(res,err)
    })
})

module.exports = router