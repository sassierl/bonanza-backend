import { createGame, validateGame } from "../models/gameModel.js";

const activeGames = new Map();

export const registerGame = (creator) => {
  const newGame = createGame(creator);
  const validation = validateGame(newGame);
  if (!validation.valid) {
    throw new Error(`Validation échouée: ${validation.errors.join(', ')}`);
  }
  activeGames.set(newGame.id, newGame);
  return newGame;
}

export const getGameById = (id) => {
  return activeGames.get(id) || null;
}

export const deleteGame = (id) => {
  return activeGames.delete(id);
}
