const games = new Map();

export const getGameById = (id) => {
  return games.get(id);
};

export const addGame = (game) => {
  games.set(game.id, game);
};

export const getAllGames = () => Array.from(games.values());
export const deleteGame = (id) => games.delete(id);
