const express = require("express");

const app = express();

app.get("/", (request, response) => {
  console.log("hi there");
  response.send("hello world");
});

app.get("/alan", (request, response) => {
  console.log("hi there");
  response.send("Mamaguevo!!");
});

app.listen(3789, () => {
  console.log("server started");
});
