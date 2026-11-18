// 정적 사이트 하나만 띄우는 최소 서버. Railway 가 PORT 를 주입한다.
const express = require('express');
const path = require('path');

const app = express();
const ROOT = __dirname;

// 소스/설정 파일은 노출하지 않는다.
const BLOCKED = new Set(['/server.js', '/package.json', '/package-lock.json', '/run.bat']);
app.use((req, res, next) => {
  if (BLOCKED.has(req.path) || req.path.startsWith('/.')) return res.status(404).send('Not found');
  next();
});

app.use(express.static(ROOT, { extensions: ['html'], dotfiles: 'ignore' }));

app.use((req, res) => res.status(404).sendFile(path.join(ROOT, 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Shape of Shannon\'s listening on ' + PORT));
