// test/api/models/test-player.js
import { createPlayer, validatePlayer } from '../../../src/api/models/playerModel.js';

console.log("==========================================");
console.log("    TESTS DU MODÈLE PLAYER");
console.log("==========================================\n");

// ==========================================
// TEST 1 : Joueur valide (expert)
// ==========================================
console.log("=== TEST 1 : Joueur valide (expert) ===");
const player1 = createPlayer("Thomas", "expert");
console.log("Données:", player1);
const validation1 = validatePlayer(player1);
console.log("Validation:", validation1);
console.log("✅ Attendu:  { valid: true }");
console.log("");

// ==========================================
// TEST 2 : Joueur valide (beginner)
// ==========================================
console.log("=== TEST 2 : Joueur valide (beginner) ===");
const player2 = createPlayer("Benjamin", "beginner");
console.log("Données:", player2);
const validation2 = validatePlayer(player2);
console.log("Validation:", validation2);
console.log("✅ Attendu: { valid: true }");
console.log("");

// ==========================================
// TEST 3 : Nom trop court
// ==========================================
console.log("TEST: Nom trop court (1 caractère)");
const player3 = createPlayer("T", "expert");
console.log("Données:", player3);
const validation3 = validatePlayer(player3);
console.log("Validation:", validation3);
console.log("❌ Attendu: { valid: false, errors: [... ] }");
console.log("");

// ==========================================
// TEST 4 : Level invalide
// ==========================================
console.log("TEST: Level invalide");
const player4 = createPlayer("Thomas", "master");
console.log("Données:", player4);
const validation4 = validatePlayer(player4);
console.log("Validation:", validation4);
console.log("❌ Attendu: { valid: false, errors: [...] }");
console.log("");

// ==========================================
// TEST 5 :  Nom vide
// ==========================================
console.log("TEST: Nom vide");
const player5 = createPlayer("", "expert");
console.log("Données:", player5);
const validation5 = validatePlayer(player5);
console.log("Validation:", validation5);
console.log("❌ Attendu: { valid: false, errors: [...] }");
console.log("");

// ==========================================
// TEST 6 :  Nom trop long
// ==========================================
console.log("TEST: Nom trop long (> 20 caractères)");
const player6 = createPlayer("UnNomVraimentTropLongPourEtreValide", "beginner");
console.log("Données:", player6);
const validation6 = validatePlayer(player6);
console.log("Validation:", validation6);
console.log("❌ Attendu:  { valid: false, errors: [... ] }");
console.log("");

// ==========================================
// TEST 7 :  Nom avec uniquement des espaces
// ==========================================
console.log("TEST: Nom avec uniquement des espaces");
const player7 = createPlayer("   ", "expert");
console.log("Données:", player7);
const validation7 = validatePlayer(player7);
console.log("Validation:", validation7);
console.log("❌ Attendu: { valid: false, errors:  [...] }");
console.log("");

// ==========================================
// TEST 8 :  Plusieurs erreurs en même temps
// ==========================================
console.log("TEST: Nom trop court + level invalide");
const player8 = createPlayer("T", "master");
console.log("Données:", player8);
const validation8 = validatePlayer(player8);
console.log("Validation:", validation8);
console.log("❌ Attendu: { valid: false, errors: [...] } (2 erreurs)");
console.log("");
