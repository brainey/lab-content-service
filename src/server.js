const express = require('express');
const http = require('http');
// const { Server } = require('socket.io');

const port = 9100;
const homedir = process.env.LAB_CONTENT_HOME || process.cwd();
    
process.chdir(homedir);

const app = express();
const server = http.createServer(app);
// const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(homedir + '/index.html');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
