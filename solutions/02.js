function battleHorde(zombies, humans) {
  let result = 0;
  for (let i = 0; i < zombies.length; i++) {
    result += -zombies[i] + +humans[i];
  }

  if (result === 0) return "x";
  return result > 0 ? `${result}h` : `${-result}z`;
}

const zombies = "242";
const humans = "334";
const result = battleHorde(zombies, humans); // -> "2h"
console.log(result);

const zombies2 = "444";
const humans2 = "282";
const result2 = battleHorde(zombies2, humans2); // -> "x"
console.log(result2);

/* 
    Candies gained: 440
    4,130 ops/s (Higher is better)
    Cognitive complexity: 4 (Lower is better)
*/
