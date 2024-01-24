require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to your desired port

app.use(bodyParser.json());

// POST endpoint to handle email sending
app.post('/send-email', (req, res) => {
    const { recipient, senderName, senderEmail, comment } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services like SendGrid or setup SMTP details
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Email options
    const mailOptions = {
        from: senderEmail,
        to: recipient,
        subject: 'New Contact Form Submission',
        text: `Name: ${senderName}\nEmail: ${senderEmail}\nComment: ${comment}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
