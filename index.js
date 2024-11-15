// What You're Aiming For

// In this checkpoint, we will introduce Node.js through a set of guided exercises.

// You will create a file for each problem.

// Instructions

// Install Node.js
// 1- In this task, you will:

// Create a file named hello-world.js
// Write a program to print "HELLO WORLD" to the console
// 2- In this task, you will:

// create a server
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
// 3-  In this task, you will:

// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from hello.txt

// 4- In this task, you will:

// Create a file named "password-generator"
// (use npm install generate-password : (https://www.npmjs.com/package/generate-password)

// Create a function that generates random passwords and console.log() that password.

// 5-  In this task, you will:

// create a file named email-sender
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

// Try to send your self email using this

//install nodejs module

// npm i node...npm init --y

import fs, { writeFileSync } from "node:fs";
import generatePassword from "generate-password";
import { console } from "node:inspector";
import { error } from "node:console";

//2
// Create a file named hello-world.js
// Write a program to print "HELLO WORLD" to the console

function create() {
  const word = "HELLO WORLD";

  fs.writeFileSync("hello-world.js", JSON.stringify(word), "utf-8");
  return;
}

create();

// Create a file named "password-generator"
// (use npm install generate-password : (https://www.npmjs.com/package/generate-password)
// Create a function that generates random passwords and console.log() that password.
function generate() {
  const password = generatePassword.generate({ length: 4, numbers: true });
  if (password.length === 4) {
    console.log(password);
    return;
  }
}

generate();

// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
fs.writeFileSync("welcome.txt", "Hello Node", "utf-8");

// Second, create a program that reads and console.log data from hello.txt

fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  //okay , i guess we will have to create another file using writeSync since hello.txt doesnt exist , so we can read it
  writeFileSync("hello.txt", "Another Hello Node", "utf-8");
  //we console.log the data
  console.log(data);
});

//removed the node_modules using gitignore
