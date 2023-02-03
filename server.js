const express = require("express");
const morgan = require('morgan');
const router = require('./routes/index');
const path = require('path');

const server = express();
require("dotenv").config();

// 로그 기록
if (process.env.NODE_ENV === 'production') { 
	server.use(morgan('combined')); // 배포환경이면
} else {
	server.use(morgan('dev')); // 개발환경이면
}

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(express.json());
server.use(express.urlencoded({ extended : true }));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', router);

server.listen(process.env.PORT, '0.0.0.0', () =>{
	console.log(process.env.PORT, '번 Port Server Start');
})