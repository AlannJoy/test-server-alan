const express = require("express");

const app = express();

const port = process.env.PORT || 3789;

app.get("/", (request, response) => {
  console.log("hi there");
  response.send("hello world");
});

app.get("/", (request, response) => {
  console.log("hi there");
  response.send("Mamaguevo!!");
});

app.listen(port, () => {
  console.log("server started");
});
