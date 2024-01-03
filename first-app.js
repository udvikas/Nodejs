console.log("Hello World");

const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from the Node.js");
// this could not do on the browser because on browser you cannot access the local file systems
