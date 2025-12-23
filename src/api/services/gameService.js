import { createGame, validateGame } from "../models/gameModel.js";
import { registerPlayer } from './playerService.js';
import { GAME_RULES, GAME_STATUS, ERROR_MESSAGES } from '../config/constants.js';

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

// TODO : réfléchir dans quel sens on souhaite appeler la fonction créatrice de partie.
export function createNewGame(username, level, nbMaxPlayers = GAME_RULES.MAX_PLAYERS) {
  const creator = registerPlayer(username, level);
  const game = createGame(creator, nbMaxPlayers);
  activeGames.set(game.id, game);
}

export const getGameById = (id) => {
  return activeGames.get(id) || null;
}

export const deleteGame = (id) => {
  return activeGames.delete(id);
}



export function getGameById(gameId) {
  return activeGames.get(gameId) || null;
}

export function getAllGames() {
  return Array.from(activeGames.values());
}

