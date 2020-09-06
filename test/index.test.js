const axios = require('axios')
const config = require('../config')

let fails = []
let success = []

const createNewUser = () => {
    axios.default.post(`http://localhost:3001/signup`, {
        uri: config.MONGO,
        email: 'test@gmail.com',
        password: '12345678'
    })
    .then(user =>{
        success.push(user.data)
    })
    .catch(err =>{
        fails.push(err)
    })
}

const signIn = () => {
    axios.default.post(`http://localhost:3001/signin`, {
        uri: config.MONGO,
        email: 'test@gmail.com',
        password: '12345678'
    })
    .then(user =>{
        success.push(user.data || 'signed in')
    })
    .catch(err =>{
        fails.push(err)
    })
}

const restore = () => {
    axios.default.patch(`http://localhost:3001/restore`, {
        uri: config.MONGO,
        email: 'test@gmail.com',
        password: '123450976'
    })
    .then(user =>{
        success.push(user.data || 'restored')
    })
    .catch(err =>{
        console.log(err)
        fails.push(err)
    })
}

const tests = {
    0: createNewUser(),
    1: signIn(),
    2: restore()
}

for(i in tests){
    tests[i]
}

setTimeout(()=>{
    console.log(`tests: 3, success: ${success.length}, fails: ${fails.length}`)
},2000)