const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./module/user')

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(user)

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello World' });
});

module.exports = app