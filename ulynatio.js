// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware для обработки данных из формы
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Настройка транспортера для отправки почты
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ваш_email@gmail.com',
        pass: 'ваш_пароль'
    }
});

// Обработчик для отправки письма
app.post('/register', (req, res) => {
    const { name, phone, class: studentClass, email } = req.body;

    const mailOptions = {
        from: 'ваш_email@gmail.com',
        to: 'dhshsjjsjs434@gmail.com',
        subject: 'Новая регистрация на сайте',
        text: `Имя: ${name}\nТелефон: ${phone}\nКласс: ${studentClass}\nEmail: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Что-то пошло не так при отправке письма');
        } else {
            console.log('Email отправлен: ' + info.response);
            res.status(200).send('Письмо успешно отправлено');
        }
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
