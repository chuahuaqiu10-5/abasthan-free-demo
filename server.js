const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Abasthan Free Demo</title></head>
<body>
  <h1>Hello from Abasthan Free Demo</h1>
  <p>This app is running normally on Abasthan's free tier.</p>
  <p>Port: ${port}</p>
</body>
</html>`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
