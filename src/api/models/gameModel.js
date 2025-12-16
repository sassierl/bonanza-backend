import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import gameSchema from './schemas/game.schema.json' with { type: 'json' };
import playerSchema from './schemas/player.schema.json' with { type: 'json' };

const ajv = new Ajv();
addFormats(ajv);

// Ajouter d'abord le schema Player (celui qui est référencé)
ajv.addSchema(playerSchema, 'player.schema.json');

// Puis compiler le schema Game (qui contient la référence)
const validateGameSchema = ajv.compile(gameSchema);

export function createGame(creator) {
  return {
    id: `game_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    status: "pending",
    creatorId: creator.id,
    players: [creator],
    maxPlayers: 6,
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