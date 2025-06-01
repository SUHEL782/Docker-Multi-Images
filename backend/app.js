const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log('User Registered:', { name, email, password });

  // Here you'd normally save to DB
  res.json({ message: 'Signup successful!' });
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
