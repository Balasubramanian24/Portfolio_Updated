const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${name}`,
        text: message,
      });
      return res.status(200).json({ success: true, message: 'Email sent!' });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
