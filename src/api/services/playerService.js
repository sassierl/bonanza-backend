import { createPlayer, validatePlayer } from "../models/playerModel.js";

const players = new Map();

export const registerPlayer = (name, level) => {
  if (getPlayerByName(name)) {
    throw new Error(`Un joueur avec le nom "${name}" existe déjà`);
  }
  const newPlayer = createPlayer(name, level);
  const validation = validatePlayer(newPlayer);
  if (!validation.valid) {
    throw new Error(`Validation échouée: ${validation.errors.join(', ')}`);
  }
  players.set(newPlayer.id, newPlayer);
  return newPlayer;
};

export const getPlayerById = (id) => {
  return players.get(id) || null;
};

export const getPlayerByName = (name) => {
  for (let player of players.values()) {
    if (player.name === name) {
      return player;
    }
  }
  return null;
};

export const deletePlayer = (id) => {
  return players.delete(id);
};

export const getPlayersCount = () => {
  return players.size;
};

export const playerExistsById = (id) => {
  return players.has(id);
};

export const playerExistsByName = (name) => {
  return getPlayerByName(name) !== null;
};

export const getAllPlayers = () => {
  return Array.from(players.values());
};
