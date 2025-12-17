import { registerPlayer } from './playerService.js';
import { createGame } from '../models/gameModel.js';
import { GAME_RULES, GAME_STATUS, ERROR_MESSAGES } from '../config/constants.js';

const activeGames = new Map();

export function createNewGame(username, level, nbMaxPlayers = GAME_RULES.MAX_PLAYERS) {
  const creator = registerPlayer(username, level);
  const game = createGame(creator, nbMaxPlayers);
  activeGames.set(gameId, gameData);
}

export function getGameById(gameId) {
  return activeGames.get(gameId) || null;
}

export function getAllGames() {
  return Array.from(activeGames.values());
}

