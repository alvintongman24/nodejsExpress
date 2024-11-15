// create a server
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
// 3-  In this task, you will:

import fs from "node:fs";
import { console } from "node:inspector";

import express from "express";
const app = express();
const port = 2000;

// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
function creation() {
  fs.writeFile("welcome.txt", "Hello Node", "utf-8", (err, data) => {
    if (err) throw error;
    // Second, create a program that reads and console.log data from hello.txt(index.js)
    console.log(data);
  });
}
creation();

// Define a route handler for the default home page
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Hello Node!!!</h1>`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
