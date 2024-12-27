function escapePyramidHead(room) {
  const n = room.length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const positions = room.reduce(
    (pos, row, index) => {
      const pyramidCol = row.findIndex((item) => item === "▲");
      const trapedCol = row.findIndex((item) => item === "T");
      if (pyramidCol !== -1) pos[0] = [index, pyramidCol];
      if (trapedCol !== -1) pos[1] = [index, trapedCol];
      return pos;
    },
    [
      [0, 0],
      [0, 0],
    ]
  );

  let pyramidHeadPosition = positions[0];
  let targetPosition = positions[1];

  const queue = [[...pyramidHeadPosition, 0]];
  const visited = new Set();
  visited.add(pyramidHeadPosition.join(","));

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();

    if (x === targetPosition[0] && y === targetPosition[1]) {
      return steps;
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < n &&
        !["#", undefined].includes(room[newX][newY]) &&
        !visited.has(`${newX},${newY}`)
      ) {
        visited.add(`${newX},${newY}`);
        queue.push([newX, newY, steps + 1]);
      }
    }
  }

  return -1;
}

const room = [
  [".", ".", "#", ".", "▲"],
  ["#", ".", "#", ".", "#"],
  [".", ".", ".", ".", "."],
  ["#", "#", "#", ".", "#"],
  ["T", ".", ".", ".", "."],
];

const result1 = escapePyramidHead(room); // -> 8
console.log(result1);

const room2 = [
  ["T", ".", "#", "."],
  [".", ".", ".", "."],
  ["▲", ".", ".", "#"],
  [".", "#", "#", "#"],
];

const result2 = escapePyramidHead(room2); // -> 2
console.log(result2);

const room3 = [
  ["#", "#", "#"],
  ["▲", ".", "#"],
  [".", "#", "T"],
];

const result3 = escapePyramidHead(room3); // -> null
console.log(result3);

/* 
    Candies gained: 80
    2,831 ops/s (Higher is better)
    Cognitive complexity: 15 (Lower is better)
*/
