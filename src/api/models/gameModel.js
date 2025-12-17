import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import gameSchema from './schemas/game.schema.js';
import playerSchema from './schemas/player.schema.json' with { type: 'json' };
import { GAME_RULES, GAME_STATUS, VALIDATION } from '../config/constants.js';

const ajv = new Ajv();
addFormats(ajv);

// Ajouter d'abord le schema Player (celui qui est référencé)
ajv.addSchema(playerSchema, 'player.schema.json');

// Puis compiler le schema Game (qui contient la référence)
const validateGameSchema = ajv.compile(gameSchema);

export function createGame(creator, maxPlayers = GAME_RULES.MAX_PLAYERS) {
  return {
    id: `${VALIDATION.GAME_ID_PREFIX}${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    status: GAME_STATUS.WAITING,
    creatorId: creator.id,
    players: [creator],
    maxPlayers,
    createdAt: new Date().toISOString()
  };
}

export function addPlayerToGame(game, player) {
  if (game.players.length < game.maxPlayers) {
    game.players.push(player);
    return true;
  }
  return false;
}

export function removePlayerFromGame(game, playerId) {
  const index = game.players.findIndex(p => p.id === playerId);
  if (index !== -1) {
    game.players.splice(index, 1);
    return true;
  }
  return false;
}

export function canStartGame(game) {
  return game.status === GAME_STATUS.WAITING &&
         game.players.length >= GAME_RULES.MIN_PLAYERS;
}

export function isGameFull(game) {
  return game.players.length >= game.maxPlayers;
}

export function validateGame(game) {
  const valid = validateGameSchema(game);
  if (!valid) {
    const errors = validateGameSchema.errors.map(err => {
      return `${err.instancePath} ${err.message}`;
    });
    return { valid: false, errors };
  }
  return { valid: true };
}