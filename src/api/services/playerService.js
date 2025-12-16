let players = [];

export const getAllPlayers = () => {
  return players;
};

export const addPlayer = (name) => {
  const newPlayer = { id: players.length + 1, name };
  players.push(newPlayer);
  return newPlayer;
}
