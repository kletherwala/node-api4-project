const express = require('express'); 

const server = express(); 
const PORT = process.env.PORT || 9000
server.get('/', (req, res) => {
  res.send('Hello');
});
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
