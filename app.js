const express = require("express");

// 创建一个express应用
const app = express();

const myLogger = function(req,res,next) {
  next();
}
// 监听关于 / 路径的get请求
app.get('/',function(req,res) {
  res.send("hello node and express");
})

// 中间件是一个函数,在请求和响应之间进行顺序调用
app.use(myLogger);

// 使express监听5000端口发起的http请求
const server = app.listen(5000,function() {
  const { address, port } = server.address();
  console.log("http server running",address,port);
})