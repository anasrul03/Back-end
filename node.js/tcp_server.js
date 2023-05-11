const net = require(`net`);

const server = net.createServer((socket) => {
  console.log(`Client Connected:`, socket.remoteAddress);

  socket.setEncoding(`utf-8`);

  socket.on(`data`, (data) => {
    console.log(`Received from Client: ${data}`);

    socket.write(`You said: ${data}`);
  });

  socket.on(`end`, () => {
    console.log(`Client disconnected`);
  });
});

server.listen(3000, () => {
  console.log(`Server started at port 3000`);
});
