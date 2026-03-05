const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="username" placeholder="Enter your username" required>
      <button type="submit">Submit</button>
    </form>`);
});

app.post('/submit', (req, res) => {
  res.send('Form submitted successfully!');
});

app.get('/about', (req, res) => {
  res.send('This is the about PAGE.');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

