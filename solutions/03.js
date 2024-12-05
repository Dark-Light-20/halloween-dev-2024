function findSafestPath(dream) {
  const rows = dream.length;
  const cols = dream[0].length;
  let safestPath = Infinity;

  function backtrack(row, col, currentPath) {
    if (row === rows - 1 && col === cols - 1) {
      safestPath = Math.min(safestPath, currentPath + dream[row][col]);
      return;
    }

    if (row >= rows || col >= cols) return;

    const currentValue = dream[row][col];
    const nextRow = row + 1;
    const nextCol = col + 1;

    backtrack(nextRow, col, currentPath + currentValue);
    backtrack(row, nextCol, currentPath + currentValue);
  }

  backtrack(0, 0, 0);
  return safestPath;
}

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

const bestPath = findSafestPath(dream); // Returns 7
console.log(bestPath);

/* 
    Candies gained: 310
    3,377 ops/s (Higher is better)
    Cognitive complexity: 6 (Lower is better)
*/
