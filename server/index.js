const express = require('express');
const app = express();
const port = 8090;

// 新增：配置静态文件目录（关键！指向product文件夹）
// __dirname 是当前index.js所在的server目录，../product 指向上级的product目录
app.use(express.static(__dirname + '/../product'));

// 原有的默认路由（可保留，也可修改为跳转到前端页面）
app.get('/', (req, res) => {
  // 方式1：直接返回前端首页（推荐）
  res.sendFile(__dirname + '/../product/index.html');
  // 方式2：保留原有返回，新增前端页面路由（比如访问 /lottery 打开页面）
  // res.send('default data');
  // app.get('/lottery', (req, res) => {
  //   res.sendFile(__dirname + '/../product/index.html');
  // });
});

// 启动服务器
app.listen(port, () => {
  console.log(`lottery server listening at http://localhost:${port}`);
});
