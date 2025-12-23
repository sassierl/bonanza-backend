export const GAME_RULES = {
  MAX_PLAYERS: 7,
  MIN_PLAYERS: 2,
  INITIAL_HAND_SIZE: 5,
  CARD_TO_DRAW_PER_TURN: 3
};

export const PLAYER_LEVELS = {
  EXPERT: 'expert',
  BEGINNER: 'beginner'
};

export const VALID_LEVELS = Object.values(PLAYER_LEVELS);

export const GAME_STATUS = {
  WAITING: 'waiting',
  IN_PROGRESS: 'in_progress',
  FINISHED: 'finished',
  CANCELLED: 'cancelled'
};

export const VALID_GAME_STATUSES = Object.values(GAME_STATUS);

export const GAME_PHASES = {
  PLANT: 'plant',
  TRADE: 'trade',
  DRAW: 'draw'
};

export const VALIDATION = {
  PLAYER_NAME_MIN_LENGTH: 2,
  PLAYER_NAME_MAX_LENGTH: 20,
  GAME_ID_PREFIX: 'game_',
  PLAYER_ID_PREFIX: 'player_'
};

export const ERROR_MESSAGES = {
  PLAYER_NAME_EMPTY: "Le nom ne peut pas être vide",
  PLAYER_NAME_TOO_SHORT: `Le nom doit avoir au moins ${VALIDATION.PLAYER_NAME_MIN_LENGTH} caractères`,
  PLAYER_NAME_TOO_LONG: `Le nom doit avoir maximum ${VALIDATION.PLAYER_NAME_MAX_LENGTH} caractères`,
  PLAYER_LEVEL_INVALID: `Le niveau doit être '${PLAYER_LEVELS.EXPERT}' ou '${PLAYER_LEVELS.BEGINNER}'`,
  PLAYER_ALREADY_EXISTS: "Un joueur avec ce nom existe déjà",
  PLAYER_NOT_FOUND:  "Joueur introuvable",

  GAME_NOT_FOUND: "Partie inexistante",
  GAME_ALREADY_STARTED: "La partie a déjà commencé",
  GAME_FULL: "La partie est pleine",
  GAME_NOT_ENOUGH_PLAYERS: `Il faut au moins ${GAME_RULES.MIN_PLAYERS} joueurs pour commencer`,
  GAME_ALREADY_IN_PROGRESS: "La partie est déjà en cours",

  NOT_YOUR_TURN: "Ce n'est pas votre tour",
  INVALID_ACTION: "Action invalide",
  ONLY_CREATOR_CAN_START: "Seul le créateur peut démarrer la partie"
};