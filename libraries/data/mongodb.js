

const setDB = (__db, __collection, client) =>{
    return client.db(__db).collection(__collection)
}

const GET = (__query, __collection, __db, client) =>{
    return new Promise((resolve,reject)=>{
        client.connect(err=>{
            if(err) reject(new Error(err));
            setDB(__db,__collection,client).find(__query).toArray((err,data)=>{
                try{
                    resolve(data)
                }catch{
                    reject(new Error(err))
                }
            })
        })
    })
}

const POST = (__path, __collection, __db, client) =>{
    return new Promise((resolve,reject)=>{
        client.connect(err=>{
            if(err) reject(new Error(err));
            setDB(__db,__collection,client).insertOne(__path)
            .then(()=>{
                resolve('upload')
            })
            .catch(err => {
                reject(new Error(err))
            })
        })
    })
}

const PATCH = (__query,__path, __collection, __db, client) =>{
    return new Promise((resolve,reject)=>{
        client.connect(err=>{
            if(err) reject(new Error(err));
            setDB(__db,__collection,client).updateOne(__query,{$set:__path})
            .then(()=>{
                resolve('updated')
            })
            .catch(err =>{
                reject(new Error(err))
            })
        })
    })
}

const DELETE = (__query, __collection, __db,client) =>{
    return new Promise((resolve,reject)=>{
        client.connect(err =>{
            if(err) reject(new Error(err));
            setDB(__db,__collection,client).deleteOne(__query)
            .then(()=>{
                resolve('deleted')
            })
            .catch(err =>{
                reject(new Error(err))
            })
        })
    })
}

class Mongo{
    
    constructor(__collection, __db, __uri){
        this.MongoClient = require('mongodb').MongoClient
       this.client = new MongoClient(__uri, { useUnifiedTopology: true })
       this.collection = __collection
       this.db = __db
    }

    POST(__path){
        return POST(__path, this.collection, this.db, this.client)
    }

    GET(__query){
        return GET(__query, this.collection, this.db, this.client)
    }

    DELETE(__query){
        return DELETE(__query,this.collection,this.db,this.client)
    }

    PATCH(__query, __path){
        return PATCH(__query,__path,this.collection,this.db,this.client)
    }
}

module.exports = {
    Mongo
}