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
  bench: {
    pointGuards: [],
    shootingGuards: [],
    smallForwards: [],
    powerForwards: [],
    centers: [],
  },
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

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function validateData() {
  const errorsList = [];

  try {
    players.pointGuards.length < settings.teamsNumber
      ? errorsList.push("- There is no enough point guards for every team")
      : null;
    players.shootingGuards.length < settings.teamsNumber
      ? errorsList.push("- There is no enough shooting guards for every team")
      : null;
    players.smallForwards.length < settings.teamsNumber
      ? errorsList.push("- There is no enough small forwards for every team")
      : null;
    players.powerForwards.length < settings.teamsNumber
      ? errorsList.push("- There is no enough power forwards for every team")
      : null;
    players.centers.length < settings.teamsNumber
      ? errorsList.push("- There is no enough centers for every team")
      : null;

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

function getRandomPlayer(position) {
  const randomIndex = Math.floor(Math.random() * players[position].length);
  return players[position].pop(randomIndex);
}

function organizeTeams() {
  outcome.teams = [];
  for (let teamNumber = 0; teamNumber < settings.teamsNumber; teamNumber++) {
    outcome.teams.push({
      pointGuard: getRandomPlayer("pointGuards"),
      shootingGuard: getRandomPlayer("shootingGuards"),
      smallForward: getRandomPlayer("smallForwards"),
      powerForward: getRandomPlayer("powerForwards"),
      center: getRandomPlayer("centers"),
    });
  }

  outcome.bench.pointGuards = players.pointGuards;
  outcome.bench.shootingGuards = players.shootingGuards;
  outcome.bench.smallForwards = players.smallForwards;
  outcome.bench.powerForwards = players.powerForwards;
  outcome.bench.centers = players.centers;
}

function showOutcome() {
  const teamTmp = `<article class="team">
    <h3>Team {teamNumber}</h3>
    <ul>
      <li><strong>Point guard:</strong> {pointGuard}</li>
      <li><strong>Shooting guard:</strong> {shootingGuard}</li>
      <li><strong>Small forward:</strong> {smallForward}</li>
      <li><strong>Power forward:</strong> {powerForward}</li>
      <li><strong>Center:</strong> {center}</li>
    </ul>
  </article>`;

  const renderTeams = [];
  outcome.teams.forEach((team, index) => {
    console.log(team);
    renderTeams.push(
      teamTmp
        .replace("{teamNumber}", index + 1)
        .replace("{pointGuard}", team.pointGuard)
        .replace("{shootingGuard}", team.shootingGuard)
        .replace("{smallForward}", team.smallForward)
        .replace("{powerForward}", team.powerForward)
        .replace("{center}", team.center)
    );
  });
  document.querySelector("#outcome div.teams").innerHTML = renderTeams.join('');

  const renderBench = [];
  renderBench.push("<h2>Bench</h2>");
  renderBench.push("<h3>Point guards</h3>");
  renderBench.push(`<ul><li>${outcome.bench.pointGuards.join('</li><li>')}</li></ul>`);
  renderBench.push("<h3>Shooting guards</h3>");
  renderBench.push(`<ul><li>${outcome.bench.shootingGuards.join('</li><li>')}</li></ul>`);
  renderBench.push("<h3>Small forwards</h3>");
  renderBench.push(`<ul><li>${outcome.bench.smallForwards.join('</li><li>')}</li></ul>`);
  renderBench.push("<h3>Power forwards</h3>");
  renderBench.push(`<ul><li>${outcome.bench.powerForwards.join('</li><li>')}</li></ul>`);
  renderBench.push("<h3>Centers</h3>");
  renderBench.push(`<ul><li>${outcome.bench.centers.join('</li><li>')}</li></ul>`);
  document.querySelector("#outcome div.bench").innerHTML = renderBench.join('');
}

function createTeams() {
  const isDataObtained = getFormData();
  const isDataValid = isDataObtained ? validateData() : false;

  if (isDataObtained && isDataValid) {
    organizeTeams();
    showOutcome();
    switchUI();
  }
}

window.addEventListener("load", () => {
  document.getElementById("createBtn").addEventListener("click", () => createTeams());
  document.getElementById("returnBtn").addEventListener("click", () => switchUI());
});
