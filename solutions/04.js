function findTheKiller(whisper, suspects) {
  const regex = new RegExp(`^${whisper.replace(/~/g, ".")}`, "i");
  return suspects.filter((suspect) => regex.test(suspect)).join(",");
}

const whisper = "d~~~~~a";
const suspects = [
  "Dracula",
  "Freddy Krueger",
  "Jason Voorhees",
  "Michael Myers",
];

const result1 = findTheKiller(whisper, suspects); // -> 'Dracula'
console.log(result1);

const whisper2 = "~r~dd~";
const suspects2 = ["Freddy", "Freddier", "Fredderic"];

const result2 = findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'
console.log(result2);

const whisper3 = "~r~dd$";
const suspects3 = ["Freddy", "Freddier", "Fredderic"];

const result3 = findTheKiller(whisper3, suspects3); // -> ''
console.log(result3);

const whisper4 = "mi~~def";
const suspects4 = ["Midudev", "Midu", "Madeval"];

const result4 = findTheKiller(whisper4, suspects4); // -> ''
console.log(result4);

/* 
    Candies gained: 470
    4,182 ops/s (Higher is better)
    Cognitive complexity: 3 (Lower is better)
*/
