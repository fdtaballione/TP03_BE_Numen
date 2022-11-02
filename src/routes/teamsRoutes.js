const routes = require("express").Router();
const {
  getTeams,
  postTeam,
  putTeam,
  delTeam,
} = require("../controllers/teamsController");

routes.get("/", getTeams);
routes.post("/", postTeam);
routes.put("/:id", putTeam);
routes.delete("/", delTeam);

module.exports = routes;
