const players = {
  pointGuards: [],
  shootingGuards: [],
  smallForwards: [],
  powerForwards: [],
  centers: [],
};

const settings = {
  teamsNumber: 2,
  playersPerTeam: 5,
};

const outcome = {
  teams: [],
  bench: [],
};

function switchUI() {
  document.getElementById("form").classList.toggle("show");
  document.getElementById("outcome").classList.toggle("show");
}

function getPlayersFromForm(listName) {
  const list = document.getElementById(listName).value.trim();
  return list == "" ? [] : list.split(/\r?\n|\r|\n/g);
}

function getFormData() {
  try {
    players.pointGuards = getPlayersFromForm("pointGuardsPlayersList");
    players.shootingGuards = getPlayersFromForm("shootingGuardPlayersList");
    players.smallForwards = getPlayersFromForm("smallforwardPlayersList");
    players.powerForwards = getPlayersFromForm("powerforwardPlayersList");
    players.centers = getPlayersFromForm("centerPlayersList");

    settings.teamsNumber = parseInt(document.getElementById("teamsNumber").value);
    settings.playersPerTeam = parseInt(document.getElementById("playerPerTeam").value);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function validateData() {
  const errorsList = [];

  try {
    players.pointGuards.length == 0 ? errorsList.push("- Point guards missings") : null;
    players.shootingGuards.length == 0 ? errorsList.push("- Shooting guards missings") : null;
    players.smallForwards.length == 0 ? errorsList.push("- Small forwards missings") : null;
    players.powerForwards.length == 0 ? errorsList.push("- Power forwards missings") : null;
    players.centers.length == 0 ? errorsList.push("- Centers missings") : null;

    if (errorsList.length > 0) {
      throw "Missings data";
    }

    return true;
  } catch (error) {
    document.querySelector("#outcome div.issues").innerHTML = errorsList.join("<br />");
    switchUI();
    console.error(error);
    return false;
  }
}

function createTeams() {
  const isDataObtained = getFormData();
  const isDataValid = isDataObtained ? validateData() : false;

  if (isDataObtained && isDataValid) {
    console.log(players);
    console.log(settings);



    switchUI();
  }
}

window.addEventListener("load", () => {
  document.getElementById("createBtn").addEventListener("click", () => createTeams());
  document.getElementById("returnBtn").addEventListener("click", () => switchUI());
});
