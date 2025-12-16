// routes/games.js
import * as gameManager from '../services/gameManager.js';
import * as gameService from '../services/gameService.js';
import express from 'express';
const router = express.Router();

// GET /api/games - Lister toutes les parties
router.get('/', (req, res) => {
  const games = gameManager.getAllGames();
  res.json(games);
});

// POST /api/games - Créer une nouvelle partie
router.post('/', (req, res) => {
  const game = gameManager.createGame(req.body.hostId);
  res.json(game);
});

// DELETE /api/games/:id - Supprimer une partie
router.delete('/:id', (req, res) => {
  const success = gameManager.deleteGame(req.params.id);
  res.json({ success });
});

