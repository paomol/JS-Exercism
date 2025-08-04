export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
  let sum = 0;
  let y = 0;

  for (let i = 0; i < limes.length; i++) {
    if (sum >= wedgesNeeded) {
      break;
    }
    switch (limes[i]) {
      case "small":
        count = 6;
        break;
      case "medium":
        count = 8;
        break;
      case "large":
        count = 10;
        break;
    }
    sum = count + sum;
    y = y + 1;
  }

  return y;
}

export function remainingOrders(timeLeft, orders) {
  let beb = 0;
  let s = 0;
  while (timeLeft > 0 && s < orders.length) {
    switch (orders[s]) {
      case "Pure Strawberry Joy":
        beb = 0.5;
        break;
      case "Energizer":
      case "Green Garden":
        beb = 1.5;
        break;
      case "Tropical Island":
        beb = 3;
        break;
      case "All or Nothing":
        beb = 5;
        break;
      default:
        beb = 2.5;
    }
    timeLeft = timeLeft - beb;
    s = s + 1;
  }
  return orders.slice(s);
}
// Sample usage for testing:
console.log(timeToMixJuice("Tropical Island")); // 3
console.log(limesToCut(25, ["small", "small", "large", "medium", "small"])); // 4
console.log(
  remainingOrders(5, ["'Energizer", "All or Nothing", "Green Garden"])
); // ["Green Garden"]
