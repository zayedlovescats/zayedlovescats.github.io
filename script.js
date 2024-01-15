let cumulativeProbabilities = []; // Declare cumulativeProbabilities globally

function getRandomItem() {
  let randomValue = Math.random();
  randomValue /= 1;
  let temp = Object.keys(items);
  let low = 0;
  let high = temp.length;
  while (low < high) {
    const mid = (low + high) >> 1; // Use bitwise shift for integer division
    if (randomValue >= cumulativeProbabilities[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  low = temp.length - 1 - low;
  return temp[low];
}

function calculateCumulativeProbabilities() {
  let cumulativeProbability = 0;

  let temp = Object.keys(items);
  for (let i = temp.length - 1; i >= 0; i--) {
    cumulativeProbability += items[temp[i]].probability; // Assuming 'probability' property
    cumulativeProbabilities[i] = cumulativeProbability;
  }
}

// Example usage
calculateCumulativeProbabilities();
let randomItem = getRandomItem();
console.log("Random Item:", randomItem);
