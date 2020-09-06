const pythonShell = require("../../../libraries/controller/pythonShell")
const { Mongo } = require("../../../libraries/data/mongodb")
const error = require('../../../error/errores.json')

class User {
    constructor(email,password){
        this.email = email,
        this.password = password
    }
}

module.exports = createUserWithEmailAndPassword = (uri,email,password) => {
    return new Promise((resolve,reject)=>{
        pythonShell('main.py', 'services/py', [email,password])
        .then(data => {
            if(data[0]=="error"){
                reject(new Error(error.IP))
            }else{
                const user = new User(data[0],data[1])
                createUser(uri,user)
                .then(ok => resolve(ok))
                .catch(err => reject(new Error(err)))
            }
        })
        .catch(err =>{
            console.error(err)
            reject(new Error(error.IC))
        })
    })
}

const createUser = (user,uri) => {
    return new Promise((resolve,reject)=>{
        new Mongo('users', 'authCore',uri)
        .POST({
            _id: user.email,
            password: user.password
        })
        .then(()=>resolve('user created'))
        .catch(err => reject(err))
    })
}