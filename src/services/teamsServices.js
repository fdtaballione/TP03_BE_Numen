const path = require("path");
const fs = require("fs/promises");

const getTeamsService = async () => {
  try {
    console.log(path.join(__dirname, "../db/database.txt"));
    const teams = await fs.readFile(
      path.join(__dirname, "../db/database.txt"),
      "utf-8"
    );
    const teamsParsed = JSON.parse(teams);
    return teamsParsed;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const postTeamService = async (newTeamBody) => {
  try {
    const teams = await fs.readFile(
      path.join(__dirname, "../db/database.txt"),
      "utf-8"
    );
    const teamsParsed = JSON.parse(teams);
    let maxId = 0;
    teamsParsed.forEach((team) => {
      if (team.id > maxId) maxId = team.id;
    });
    const newId = maxId + 1;
    const newTeam = { id: newId, ...newTeamBody };
    teamsParsed.push(newTeam);
    const stringTeamsParsed = JSON.stringify(teamsParsed);
    await fs.writeFile(
      path.join(__dirname, "../db/database.txt"),
      stringTeamsParsed,
      "utf-8"
    );
    return null;
  } catch (error) {
    return { message: "Error", errorMessage: error.message };
  }
};

const putTeamService = async (id, newTeamBody) => {
  try {
    const teams = await fs.readFile(
      path.join(__dirname, "../db/database.txt"),
      "utf-8"
    );
    const teamsParsed = JSON.parse(teams);
    const team = teamsParsed.find((ele) => ele.id === Number(id));
    if (!team)
      res
        .status(404)
        .json({ message: "Error", errorMessage: "equipo no encontrado" });

    const newTeams = teamsParsed.map((team) =>
      team.id === Number(id)
        ? {
            id: Number(id),
            country: newTeamBody.country,
            flag_url: newTeamBody.flag_url,
            group: newTeamBody.group,
          }
        : team
    );
    const stringTeamsParsed = JSON.stringify(newTeams);
    await fs.writeFile(
      path.join(__dirname, "../db/database.txt"),
      stringTeamsParsed,
      "utf-8"
    );
    return null;
  } catch (error) {
    return { message: "Error", errorMessage: error.message };
  }
};

const delTeamService = async (id) => {
  try {
    const teams = await fs.readFile(
      path.join(__dirname, "../db/database.txt"),
      "utf-8"
    );
    const teamsParsed = JSON.parse(teams);
    const team = teamsParsed.find((ele) => ele.id === Number(id));
    if (!team)
      return { message: "Error", errorMessage: "equipo no encontrado" };
    const newTeams = teamsParsed.filter((team) => team.id !== Number(id));
    const stringTeamsParsed = JSON.stringify(newTeams);
    await fs.writeFile(
      path.join(__dirname, "../db/database.txt"),
      stringTeamsParsed,
      "utf-8"
    );
    return null;
  } catch (error) {
    return { message: "Error", errorMessage: error.message };
  }
};

module.exports = {
  getTeamsService,
  postTeamService,
  putTeamService,
  delTeamService,
};
