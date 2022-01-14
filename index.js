const express = require('express'); 
require('dotenv').config()
const server = express(); 
const PORT = process.env.PORT || 9000
server.get('/', (req, res) => {
  res.send('Hello');
});
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
