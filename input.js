// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // '\u0003' is the same as ctrl + c combination
    process.exit();
  }
   if (key === "w") {
    connection.write("Move: up")
   } 
   if (key === "a") {
    connection.write("Move: left")
   } 
   if (key === "s") {
    connection.write("Move: down")
   } 
   if (key === "d") {
    connection.write("Move: right")
   } 
   if (key === "d") {
    connection.write("Move: right")
   } 
   if (key === "r") {
    connection.write("Say: I'm hungry")
   } 
   if (key === "q") {
    connection.write("Say: Yummy!")
   } 
};



module.exports = { setupInput };