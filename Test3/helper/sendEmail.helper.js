const nodemailer = require("nodemailer")
const smtpConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: { user: 'caottmpiflaabaqm@ethereal.email', pass: 'WTu2e46udZ8Er46RkK'}
}
const sendEmailMe = async(reciver, textEmail)=>{
    try{
        const transporter = nodemailer.createTransport(smtpConfig)
         await transporter.sendMail({
            from: "Our Project",
            to: reciver,
            subject: "Hello ✔", 
            text: textEmail
          });
    }
    catch(e){
        console.log(e)
    }
}

module.exports = sendEmailMe