const emailTemplate = require("./templates/emailTemplate")
const mailjet = require('../../../libraries/smtp/mailjet')

module.exports = sendEmail = (email,url, f) =>{
    return new Promise((resolve,reject)=>{
        let header = ''
        const file = {
            0: () => {
                header = "Verificación de cuenta"
                return emailTemplate(url)
            },
        }

        mailjet(email,file(f),header)
        .then(()=>{
            resolve('email sent')
        })
        .catch(err => {
            console.error(err)
            reject(new Error('email cannot sent'))
        })
    })
}