let a = true;
export function needsLicense(kind) {
  if (kind == "car") {
    a = true;
  } else if (kind == "bike") {
    a = false;
  }
  return a;
}

export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return option1 + " is clearly the better choice.";
  } else {
    return option2 + " is clearly the better choice.";
  }
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age <= 10 && age >= 3) {
    return originalPrice * 0.7;
  } else if (age > 10) {
    return originalPrice * 0.5;
  }
}
// Sample usage for testing:
console.log(needsLicense("car")); // true
console.log(needsLicense("bike")); // false
console.log(chooseVehicle("Honda", "Toyota")); // "Honda is clearly the better choice."
console.log(chooseVehicle("Ford", "Chevrolet")); // "Chevrolet is clearly the better choice."
console.log(calculateResellPrice(1000, 1)); // 800
console.log(calculateResellPrice(1000, 5)); // 700
console.log(calculateResellPrice(1000, 15)); // 500
