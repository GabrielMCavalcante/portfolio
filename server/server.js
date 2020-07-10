const express = require('express')
const cors = require('cors')
const nodemailer = require("nodemailer")
require('dotenv').config()

const app = express()
const PORT = 5000
const destinyMail = 'contato.gabrielmcavalcante@gmail.com'

app.use(express.json())
app.use(cors())



app.post('/sendmail', (req, res) => {
    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    transporter.sendMail({
        from: email,
        to: destinyMail,
        subject: "Nova mensagem de " + name,
        text: message,
        html: `
            <h1>Mensagem de ${name}</h1>
            <p>${message}</p>
            <h2>Informações de ${name}</h2>
            <ul>
                <li>Nome: ${name}</li>
                <li>Email: ${email}</li>
            </ul>
        `
    })
    .then(() => res.status(200).json({status: 'Ok'}))
    .catch(() => res.status(200).json({status: 'Error'}))
})

app.listen(PORT, () => console.log(`Server started @port ${PORT}`))