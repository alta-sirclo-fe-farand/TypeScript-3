export const simpleEquations = (a: number, b: number, c: number) => {
  let possibleCombinations = [];
  for (let x = 1; x < c; x++) {
    for (let y = 1; y < c; y++) {
      for (let z = 1; z < c; z++) {
        if (x**2 + y**2 + z**2 == c) {
          possibleCombinations.push([x,y,z]);
        }
      }
    }
  }

  for (let Combination in possibleCombinations) {
    if (parseInt(Combination[0]) * parseInt(Combination[1]) * parseInt(Combination[2]) != b) {
      possibleCombinations.shift();
    }
  }

  for (let Combination in possibleCombinations) {
    if (parseInt(Combination[0]) * parseInt(Combination[1]) * parseInt(Combination[2]) != a) {
      possibleCombinations.shift();
    }
  }
  if (possibleCombinations.length == 0) {
    return "no solution";
  }
  return possibleCombinations[0].sort().join(" ");
};