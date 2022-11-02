const {
  getTeamsService,
  postTeamService,
  putTeamService,
  delTeamService,
} = require("../services/teamsServices");

const getTeams = async (req, res) => {
  try {
    const teams = await getTeamsService();
    if (teams !== null) res.status(200).json(teams);
    else res.status(200).json({ message: "Sin datos para mostrar" });
  } catch (error) {
    res.status(404).json({ message: "Error", errorMessage: error.message });
  }
};

const postTeam = async (req, res) => {
  try {
    const newTeamBody = req.body;
    const respuesta = await postTeamService(newTeamBody);
    console.log(respuesta);
    if (respuesta !== null) res.status(400).json(respuesta);
    else res.status(200).json({ message: "Team agregado con éxito" });
  } catch (error) {
    res.status(400).json({ message: "Error", errorMessage: error.message });
  }
};

const putTeam = async (req, res) => {
  try {
    const id = req.params.id;
    const newTeamBody = req.body;
    const respuesta = await putTeamService(id, newTeamBody);
    console.log(respuesta);
    if (respuesta !== null) res.status(400).json(respuesta);
    else res.status(200).json({ message: "Team modificado con éxito" });
  } catch (error) {
    res.status(400).json({ message: "Error", errorMessage: error.message });
  }
};

const delTeam = async (req, res) => {
  try {
    const { id } = req.query;
    const respuesta = await delTeamService(id);
    console.log(respuesta);
    if (respuesta !== null) res.status(400).json(respuesta);
    else res.status(200).json({ message: "Team eliminado con éxito" });
  } catch (error) {
    res.status(400).json({ message: "Error", errorMessage: error.message });
  }
};

module.exports = { getTeams, postTeam, putTeam, delTeam };
