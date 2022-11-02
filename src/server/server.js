const express = require("express");
const server = express();
const teamsRoutes = require("../routes/teamsRoutes");

server.use(express.json());
server.get("/", (_, res) => {
  res.send("Servidor funcionando");
});

server.use("/api/teams", teamsRoutes);

module.exports = server;
