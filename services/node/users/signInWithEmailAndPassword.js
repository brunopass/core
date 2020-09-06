const { Mongo } = require("../../../libraries/data/mongodb")
const pythonShell = require("../../../libraries/controller/pythonShell")
const { sign } = require("../../../libraries/security/jwt")
const error = require('../../../error/errores.json')

module.exports = signInWithEmailAndPassword = (uri,email,password) => {
    return new Promise((resolve,reject)=>{
        pythonShell('main.py', 'services/py', [email,password])
        .then(data => {
            new Mongo('users', 'authCore',uri)
            .GET({_id: data[0]})
            .then(user => {
                if(user[0].password === data[1]){
                    resolve(sign({sub:user[0]}))
                }else{
                    reject(new Error(error.IC))
                }
            })
            .catch(err => {
                console.log(err)
                reject(new Error(error.IC))
            })
        })
    })
}