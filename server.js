'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const path=require('path');
const favicon = require('serve-favicon');

const server = express();

server.set('view engine', 'ejs');

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
  extended: false
}));


server.use(express.static(path.join(__dirname, 'static')));

server.use(cookieParser());

server.use(favicon(__dirname + '/static/images/favicon.ico'));

server.use(function (req, res,next) {
  var _path=req.path;
  console.log(_path);
  if(_path.indexOf('/api')>=0||_path.indexOf('/node_modules')>=0){
    next();
  }else{
    res.render('index');
  }
});

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// 错误处理
// 开发环镜
if (server.get('env') === 'development') {
  server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      title: err.message,
      message: err.message,
      error: err
    });
  });

}

// 生产环境错误处理
server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

server.locals.base='http://45.78.10.69:3000/';
server.listen(3000, function() {
  console.log('server start success at port:' + 3000);
});

module.exports = server;
