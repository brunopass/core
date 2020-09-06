const { Mongo } = require("../../../libraries/data/mongodb")
const error = require('../../../error/errores.json')

module.exports = restorePassword = (uri,email,password) =>{
    return new Promise((resolve,reject)=>{
        new Mongo('users', 'authCore',uri)
        .GET({_id: email})
        .then(user => {
            pythonShell('main.py', 'services/py', ['null',password])
            .then(data => {
                restore(uri,user._id,data[0])
                .then(ok => {
                    resolve(ok)
                })
                .catch(err => reject(err))
            })
            .catch(err =>{
                console.error(err)
                reject(new Error(err))
            })
        })
        .catch(err => {
            console.error(err)
            reject(new Error(error.IC))
        })        
    })
}

const restore = (uri,email,hash) => {
    return new Promise((resolve,reject)=>{
        new Mongo('users', 'authCore',uri)
        .PATCH({_id:email},{password:hash})
        .then(()=>{
            resolve('ok')
        })
        .catch(err => {
            console.error(err)
            reject(new Error(err))
        })
    })
}