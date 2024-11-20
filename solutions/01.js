function createMagicPotion(potions, target) {
  let combination;

  for (let i = 0; i < potions.length - 1; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      if (potions[i] + potions[j] === target) {
        if (combination?.[1] < j) {
          continue;
        }
        combination = [i, j];
      }
    }
  }

  return combination;
}

const potions = [4, 5, 6, 2];
const goal = 8;
console.log(createMagicPotion(potions, goal)); // [2, 3]

const potions2 = [1, 2, 3, 4];
const goal2 = 9;
console.log(createMagicPotion(potions2, goal2)); // undefined

const potions3 = [1, 2, 3, 4];
const goal3 = 5;
console.log(createMagicPotion(potions3, goal3)); // [1, 2]

/* 
    Candies gained: 430
    4,057 ops/s (Higher is better)
    Cognitive complexity: 5 (Lower is better)
*/
