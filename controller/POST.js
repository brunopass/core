const express = require('express')
const { onSuccess, onError, onCookie } = require('../services/node/network/response')
const createUserWithEmailAndPassword = require('../services/node/users/createUserWithEmailAndPassword')
const signInWithEmailAndPassword = require('../services/node/users/signInWithEmailAndPassword')
const router = express.Router('../.ENV')

router.post('/signup', (req,res)=>{
    createUserWithEmailAndPassword(
        req.body.uri,
        req.body.email,
        req.body.password
    )
    .then(ok => onSuccess(res,ok,201))
    .catch(err =>{
        console.error(err)
        onError(res,err,400)
    })
})

router.post('/signin', (req,res)=>{
    signInWithEmailAndPassword(
        req.body.uri,
        req.body.email,
        req.body.password
    )
    .then(jwt => onCookie(res,'cookie','authCore',jwt, {httpOnly:true}))
    .catch(err=> onError(res,err))
})

module.exports = router
