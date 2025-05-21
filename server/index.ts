import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

console.log('EMAIL_USER:', process.env.EMAIL_USER || 'не задан');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.get('api/ping', (_req, res) => {
  res.send('pong');
});

// Обработка остальных API-запросов

app.post('/api/contact', async (req, res) => {
  const { name, email, message} = req.body;
  console.log('📨 Получено сообщение из формы:', req.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Сайт заказов" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Новая завявка от ${name}`,
      html: `
        <h3>Имя: ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Письмо отправлено');
    res.status(200).json({ message: 'Письмо успешно отправлено' });

  
  } catch (err) {
    console.error('❌ Ошибка при отправке письма:', err);
    res.status(500).json({ error: "Не удалось отправить письмо"});
  }
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});

// Для отладки
// setInterval(() => {
//   console.log("🟢 Сервер всё ещё работает...");
// }, 5000);