const express = require('express');
const port = 5000;
const server = express();

server.get('/', (req, res) => {
  res.send('Express stuff');
})

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});