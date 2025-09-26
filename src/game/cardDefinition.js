const cardDefinitions = [
  //{ name: 'Coffee Bean', number: 24, requiredAmount: [4, 7, 10, 12] },
  // sellValues: [
    { cards: 4, gold: 1 },
    { cards: 7, gold: 2 },
    { cards: 10, gold: 3 },
    { cards: 12, gold: 4 }
  ]
  //{ name: 'Wax Bean', number: 22, requiredAmount: [4, 7, 9, 11] },
  { name: 'Blue Bean', number: 20, requiredAmount: [4, 6, 8, 10] },
  { name: 'Chili Bean', number: 18, requiredAmount: [3, 6, 8, 9] },
  { name: 'Stink Bean', number: 16, requiredAmount: [3, 5, 7, 8] },
  { name: 'Green Bean', number: 14, requiredAmount: [3, 5, 6, 7]  },
  { name: 'Soy Bean', number: 12, requiredAmount: [2, 4, 6, 7] },
  { name: 'Black-eyed Bean', number: 10, requiredAmount: [2, 4, 5, 6] },
  { name: 'Red Bean', number: 8, requiredAmount: [2, 3, 4, 5] },
  { name: 'Garden Bean', number: 6, requiredAmount: [0, 2, 3] },
  // TODO : Gérer la logique des 0 = peut pas vendre mieux.
  //{ name: 'Cocoa Bean', number: 4, requiredAmount: [0, 2, 3, 4] },
];

export default cardDefinitions;
