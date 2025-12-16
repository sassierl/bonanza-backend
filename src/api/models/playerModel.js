import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import playerSchema from './schemas/player.schema.json' with { type: 'json' };

// Initialiser le validateur
const ajv = new Ajv();
addFormats(ajv);

// Compiler le schema
const validatePlayerSchema = ajv.compile(playerSchema);

export function createPlayer(name, level) {
  return {
    id: `player_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    name,
    level,
    createdAt: new Date().toISOString()
  };
}

export function validatePlayer(player) {
  const valid = validatePlayerSchema(player);
  if (!valid) {
    const errors = validatePlayerSchema.errors.map(err => {
      return `${err.instancePath} ${err.message}`;
    });
    return { valid: false, errors };
  }
  return { valid: true };
}