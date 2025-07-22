export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  let a = word[0];
  let b = a.toUpperCase();
  let c = word.slice(1).toLowerCase();
  return b + c;
}

export function backDoorResponse(line) {
  let k = line.trim();
  let a = k.length;
  let b = k[a - 1];
  return b;
}

export function backDoorPassword(word) {
  let a = word[0];
  let b = a.toUpperCase();
  let c = word.slice(1).toLowerCase();
  return b + c + ", please";
}

// Sample usage for testing:
console.log("Front Door Response:", frontDoorResponse("Stands so high")); // S
console.log("Front Door Password:", frontDoorPassword("SHIRE")); // Shire
console.log("Back Door Response:", backDoorResponse("Stands so high   ")); // h
console.log("Back Door Password:", backDoorPassword("horse")); // Horse, please
