export function createScoreBoard() {
  const obj = {
    "The Best Ever": 1000000,
  };
  return obj;
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];

  return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] = scoreBoard[player] + points;
  return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
  for (let i in scoreBoard) {
    scoreBoard[i] = scoreBoard[i] + 100;
  }
  return scoreBoard;
}

// Sample usage for testing:
console.log("Create Score Board:", createScoreBoard()); // { 'The Best Ever': 1000000 }
console.log(
  "Add Player:",
  addPlayer({ "Dave Thomas": 0 }, "José Valim", 486373)
); // { 'Dave Thomas': 0, 'José Valim': 486373 }
console.log(
  "Remove Player:",
  removePlayer({ "Dave Thomas": 0 }, "Rose Fanaras")
); // { 'Dave Thomas': 0 }
console.log(
  "Update Score:",
  updateScore({ "Freyja Ćirić": 12771008 }, "Freyja Ćirić", 73)
); // { 'Freyja Ćirić': 12771081 }
console.log("Apply Monday Bonus:", applyMondayBonus(createScoreBoard())); // { 'The Best Ever': 1000100, Alice: 300 }
