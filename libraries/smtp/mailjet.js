const config = require('../../config')

module.exports = smtp = (email,message,header) =>{
    const mailjet = require ('node-mailjet')
    .connect(config.APIKEY, config.APISECRET)
    return mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "passarellibruno@outlook.com",
            "Name": "AuthCore"
          },
          "To": [
            {
              "Email": email,
              "Name": "user"
            }
          ],
          "Subject": header,
          "TextPart": "sent by AuthCore",
          "HTMLPart": message,
          "CustomID": "AppGettingStartedTest"
        }
      ]
    })
}
