const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      Nome: <input type="text" name="username" placeholder="" required>
      <button type="submit">Submit</button>
    </form>`);
});

app.get('/about/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send('This is the about PAGE.');
});


app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send(`Form submitted successfully!: ${req.body.username}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

