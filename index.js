const http = require('http');

const server = http.createServer((req, res) => {
  // It will read from Railway's environment variables later!
  const message = process.env.MY_MESSAGE || "Hello, this is the default Production app!";
  res.end(message);
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server running on port ${port}`));