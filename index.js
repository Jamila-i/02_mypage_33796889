const http = require("http");
const port = 8000;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Page — 33796889</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      line-height: 1.6;
      margin: 2rem;
      max-width: 70ch;
    }
    h1 { margin-bottom: .25rem; }
    h2 { margin-top: 1rem; color: #842f57ff; font-weight: 600; }
    p  { margin-top: 1rem; }
  </style>
</head>

<body>
  <h1>Hi, I’m Jamila</h1>
  <h2>About Myself</h2>
  <p>I’m a third-year student studying BSc Computer Science at Goldsmiths, University of London.</p>
</body>
</html>`;

const server = http.createServer(function (req, res) {
  console.log(`Request received for: ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(port, function () {
  console.log(`MyPage is running on port ${port}...`);
});
