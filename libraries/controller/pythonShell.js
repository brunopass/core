const { PythonShell } = require("python-shell");

/*
*   filename: ej: 'main.py'
*   scriptPath: ej: 'services/scripts
*   args: argumentos, [0,1,2,3,4]
*   mode: text/json
**/

module.exports = pythonShell = (fileName, scriptPath, args=[], mode) => {
    return new Promise((resolve,reject)=>{
        PythonShell.run(fileName, {
            mode: mode,
            pythonOptions: ['-u'],
            args: args,
            scriptPath: scriptPath
        }, (err,results)=>{
            if(err){
                reject(new Error(err))
            }
            resolve(results)
        })
    })
}