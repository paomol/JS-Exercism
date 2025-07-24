export function totalBirdCount(birdsPerDay) {
  let a = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    a = birdsPerDay[i] + a;
  }
  return a;
}

export function birdsInWeek(birdsPerDay, week) {
  let b = 0;
  for (let i = 7 * (week - 1); i < 7 * (week - 1) + 7; i++) {
    b = birdsPerDay[i] + b;
  }

  return b;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    let y = birdsPerDay[i];
    birdsPerDay[i] = y + 1;
    i = i + 1;
  }
  return birdsPerDay;
}

// Sample usage for testing:
console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1])); //34
console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2)); // 12
console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1])); // [3, 5, 1, 7, 5, 1]
