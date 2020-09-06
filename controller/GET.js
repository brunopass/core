const express = require('express')
const { verify } = require('jsonwebtoken')
const { onError, onSuccess } = require('../services/node/network/response')
const router = express.Router()

router.get('/auth', (req,res)=>{
    const token = req.body.authCore
    try{
        verify(token)
        onSuccess(res,'auth')
    }catch(err){
        onError(res,err)
    }
})  

module.exports = router