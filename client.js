const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

    conn.on("data", (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    conn.write('Name: YLM');
  });

  // conn.on('connect', () => {
  // conn.write("Move: up");
  // setInterval(() => {
  // conn.write("Move: up");
  // }, 200
  // )
  // });

    // interpret incoming data as text
    conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };