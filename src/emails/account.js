const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'noreply@socialite-media.com',
        subject: 'Thanks for signing up',
        text: `Welcome to the task manager app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'noreply@socialite-media.com',
        subject: 'Account terminated',
        text: `Good bye, ${name}. We're sorry to see you go.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
