//---- Setup http server, express and socket.io

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io').listen(server);
server.listen(port);

app.use(express.static('public'));
console.log(`Listening for socket connections on port ${port}`);


//---- Real stuff with socket.io

io.on('connection', (socket) => {
  console.log('New client:  ' + socket.id);
  
  socket.on('buttonGlitch', function(data) {
    // do something with the data
    if(data == true) {
      io.emit('ledBoard', 1);
    } else {
      io.emit('ledBoard', 0);
    }
  });
  
  
  socket.on('disconnect', function() {
    console.log('Client has disconnected: ' + socket.id);
  })
  
});
