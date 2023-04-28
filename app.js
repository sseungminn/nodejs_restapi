const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// bodyParser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes 설정
app.use('/', routes);

// 404 에러 핸들링
app.use(function(req, res, next) {
  res.status(404).send('Not Found');
});

// 서버 실행
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});