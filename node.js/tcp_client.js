const net = require("net");

// Create a new client socket and connect to the server on port 3000
const client = new net.Socket();
client.connect(3000, "localhost", () => {
  console.log("Connected to server");

  // Send some data to the server
  client.write("Hello from client!");
});

// When data is received from the server, log it
client.on("data", (data) => {
  console.log(`Received from server: ${data}`);
});

// When server closes connection, log it & close the client socket
client.on("close", () => {
  console.log("Connection to server closed");
  client.destroy();
});
