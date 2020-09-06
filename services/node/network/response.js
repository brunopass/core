const onSuccess = (res,data,status) => {
    res.status(status || 200).send(data)
}

const onError = (res,error,status) => {
    res.status(status || 400).send(error)
}

const onCookie = (res,data,name,value,options=[]) => {
    res.cookie(name,value,options).send(data)
}

module.exports = {
    onSuccess,
    onError,
    onCookie
}