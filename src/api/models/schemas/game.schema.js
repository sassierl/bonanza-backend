import { GAME_RULES, GAME_STATUS } from '../../config/constants.js';

export const gameSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Game",
  "description": "A bohnanza game",
  "type": "object",
  "properties": {
    "gameId": {
      "type": "string",
      "pattern": "^game_[0-9]+_[0-9]+$"
    },
    "status":  {
      "type": "string",
      "enum": Object.values(GAME_STATUS)
    },
    "creatorId": {
      "type": "string"
    },
    "players": {
      "type": "array",
      "minItems": 1,
      "maxItems":  GAME_RULES.MAX_PLAYERS,
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "name": { "type":  "string", "minLength": 2, "maxLength": 20 },
          "level": { "type": "string", "enum": ["expert", "beginner"] },
          "createdAt": { "type": "string", "format": "date-time" }
        },
        "required": ["id", "name", "level", "createdAt"]
      }
    },
    "maxPlayers": {
      "type":  "integer",
      "minimum": GAME_RULES.MIN_PLAYERS,
      "maximum": GAME_RULES.MAX_PLAYERS
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": ["gameId", "status", "creatorId", "players", "maxPlayers", "createdAt"],
  "additionalProperties": false
};
