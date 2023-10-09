var express = require("express");
var app = express();

// app.get("/home/index", (req, res) => {
// app.get("/user/:id?", (req, res) => {
//   console.log(req.params.id);
//   res.status(200).send("OK");
// });

app.use("/user", require("./router/user.js"));

app.listen(3000);