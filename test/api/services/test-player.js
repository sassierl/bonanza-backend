import {
  registerPlayer,
  getPlayerById,
  getPlayerByName,
  getAllPlayers,
  playerExistsByName,
  deletePlayer,
  getPlayersCount
} from '../../../src/api/services/playerService.js';

// TEST 1 : Enregistrer un joueur valide
console.log("=== TEST 1 : Enregistrer un joueur ===");
try {
  const player1 = registerPlayer("Thomas", "expert");
  console.log("✅ Joueur créé:", player1);
  console.log(`Nombre de joueurs: ${getPlayersCount()}`);
} catch (error) {
  console.log("❌ Erreur:", error.message);
}
console.log("");

// TEST 2 :  Enregistrer un 2ème joueur
console. log("=== TEST 2 : Enregistrer un 2ème joueur ===");
try {
  const player2 = registerPlayer("Benjamin", "beginner");
  console.log("✅ Joueur créé:", player2);
  console.log(`Nombre de joueurs: ${getPlayersCount()}`);
} catch (error) {
  console.log("❌ Erreur:", error.message);
}
console.log("");

// TEST 3 : Tenter d'enregistrer un nom déjà pris
console. log("=== TEST 3 : Nom déjà pris (doit échouer) ===");
try {
  const player3 = registerPlayer("Thomas", "beginner");
  console.log("❌ Ne devrait pas arriver ici");
} catch (error) {
  console.log("✅ Erreur attendue:", error.message);
}
console.log("");

// TEST 4 : Récupérer un joueur par ID
console.log("=== TEST 4 : Récupérer par ID ===");
const player1 = getPlayerByName("Thomas");
const found = getPlayerById(player1.id);
console.log(found ? "✅ Joueur trouvé:" : "❌ Joueur non trouvé", found);
console.log("");

// TEST 5 : Récupérer un joueur par nom
console.log("=== TEST 5 :  Récupérer par nom ===");
const foundByName = getPlayerByName("Benjamin");
console.log(foundByName ? "✅ Joueur trouvé:" : "❌ Joueur non trouvé", foundByName);
console.log("");

// TEST 6 :  Récupérer tous les joueurs
console.log("=== TEST 6 : Récupérer tous les joueurs ===");
const allPlayers = getAllPlayers();
console.log(`Total:  ${allPlayers.length} joueurs`);
allPlayers.forEach((p, i) => {
  console.log(`  ${i + 1}. ${p.name} (${p.level})`);
});
console.log("");

// TEST 7 :  Vérifier l'existence
console.log("=== TEST 7 : Vérifier l'existence ===");
console.log(`"Thomas" existe ?  ${playerExistsByName("Thomas") ? "✅ Oui" : "❌ Non"}`);
console.log(`"Bob" existe ? ${playerExistsByName("Bob") ? "❌ Oui" : "✅ Non"}`);
console.log("");

// TEST 8 :  Supprimer un joueur
console.log("=== TEST 8 : Supprimer un joueur ===");
const deleted = deletePlayer(player1.id);
console.log(deleted ? "✅ Joueur supprimé" : "❌ Échec suppression");
console.log(`Nombre de joueurs restants: ${getPlayersCount()}`);
console.log("");

// TEST 9 : Validation (nom vide)
console.log("=== TEST 9 : Nom vide (doit échouer) ===");
try {
  const playerInvalid = registerPlayer("", "expert");
  console.log("❌ Ne devrait pas arriver ici");
} catch (error) {
  console.log("✅ Erreur attendue:", error.message);
}