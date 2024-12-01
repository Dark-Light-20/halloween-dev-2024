function findSafestPath(dream) {
  const rows = dream.length;
  const cols = dream[0].length;
  const solutions = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));

  solutions[0][0] = dream[0][0];

  for (let i = 1; i < rows; i++) {
    solutions[i][0] = solutions[i - 1][0] + dream[i][0];
  }

  for (let j = 1; j < cols; j++) {
    solutions[0][j] = solutions[0][j - 1] + dream[0][j];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      solutions[i][j] =
        Math.min(solutions[i - 1][j], solutions[i][j - 1]) + dream[i][j];
    }
  }

  return solutions[rows - 1][cols - 1];
}

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

const bestPath = findSafestPath(dream); // Returns 7
console.log(bestPath);

/* 
    Candies gained: ???
    ?,??? ops/s (Higher is better)
    Cognitive complexity: ? (Lower is better)
    // TODO: There is a problem with the website, can't validate the challenge
*/
