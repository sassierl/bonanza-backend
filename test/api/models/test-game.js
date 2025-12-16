import { createPlayer } from '../../../src/api/models/playerModel.js';
import { 
  createGame, 
  validateGame, 
  addPlayerToGame, 
  removePlayerFromGame 
} from '../../../src/api/models/gameModel.js';

console.log("==========================================");
console.log("  TEST GAME :  Créer, Ajouter, Retirer");
console.log("==========================================\n");
console.log("=== ÉTAPE 1 :  Créer le joueur 1 ===");

const player1 = createPlayer("Thomas", "expert");

console.log("Joueur 1 créé:");
console.log(player1);
console.log("");

console.log("=== ÉTAPE 2 : Créer une partie avec le joueur 1 ===");

const game = createGame(player1, 5);

console.log("Partie créée:");
console.log(game);
console.log("");

// Vérifier les propriétés
console.log("Vérifications:");
console.log(`- gameId: ${game.gameId}`);
console.log(`- status: ${game.status}`);
console.log(`- creatorId: ${game.creatorId}`);
console.log(`- Nombre de joueurs: ${game. players.length}`);
console.log(`- maxPlayers: ${game.maxPlayers}`);
console.log("");

// Valider la partie
const validation1 = validateGame(game);

console.log("Validation de la partie:");
console.log(validation1);
console.log(validation1.valid ?  "✅ Partie valide" : "❌ Partie invalide");
console.log("");

// ------------------------------------------
// ÉTAPE 3 :  Créer le joueur 2
// ------------------------------------------
console.log("=== ÉTAPE 3 : Créer le joueur 2 ===");

const player2 = createPlayer("Benjamin", "beginner");

console.log("Joueur 2 créé:");
console.log(player2);
console.log("");

// ------------------------------------------
// ÉTAPE 4 : Ajouter le joueur 2 à la partie
// ------------------------------------------
console.log("=== ÉTAPE 4 : Ajouter le joueur 2 à la partie ===");

addPlayerToGame(game, player2);

console. log("Joueur 2 ajouté !");
console.log(`Nombre de joueurs maintenant: ${game.players.length}`);
console.log("Liste des joueurs:");
game.players.forEach((player, index) => {
  console.log(`- Joueur ${index + 1}: ${player.name} (${player.level})`);
});

console.log("");

// Valider la partie après ajout
const validation2 = validateGame(game);

console.log("Validation de la partie après ajout:");
console.log(validation2);
console.log(validation2.valid ?  "✅ Partie valide" : "❌ Partie invalide");
console.log("");

// ------------------------------------------
// ÉTAPE 5 : Retirer le joueur 2
// ------------------------------------------
console.log("=== ÉTAPE 5 : Retirer le joueur 2 de la partie ===");

removePlayerFromGame(game, player2.id);

console.log("Joueur 2 retiré !");
console.log(`Nombre de joueurs maintenant: ${game.players.length}`);
console.log("Liste des joueurs:");
game.players.forEach((player, index) => {
  console.log(`- Joueur ${index + 1}: ${player.name} (${player.level})`);
});

console.log("");

// Valider la partie après retrait
const validation3 = validateGame(game);

console.log("Validation de la partie après retrait:");
console.log(validation3);
console.log(validation3.valid ? "✅ Partie valide" : "❌ Partie invalide");
console.log("");
