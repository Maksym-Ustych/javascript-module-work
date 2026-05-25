function summarizeNumbers(numbers) {
  let count = numbers.length;
  let sum = 0;
  let evenCount = 0;
  let max = undefined;

  if (count === 0) {
    return {
      count: 0,
      sum: 0,
      evenCount: 0,
      max: undefined,
      category: "empty"
    };
  }

  max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (numbers[i] % 2 === 0) {
      evenCount++;
    }

    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  let category;

  if (sum > 0) {
    category = "positive";
  } else {
    category = "non-positive";
  }

  return {
    count: count,
    sum: sum,
    evenCount: evenCount,
    max: max,
    category: category
  };
}

console.log(summarizeNumbers([4, 7, 2, 9]));
console.log(summarizeNumbers([]));
console.log(summarizeNumbers([-5, 2, 1]));