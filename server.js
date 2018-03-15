const express = require('express');

const PORT = process.env.PORT || 5150;
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/subscribe', (req, res) => {
  res.render('subscribe');
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
