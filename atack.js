export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent && !archerIsAwake) {
    return true;
  }
  return prisonerIsAwake && !knightIsAwake && !archerIsAwake;
}

// Sample usage for testing:
console.log("Fast Attack:", canExecuteFastAttack(true)); // false
console.log("Spy:", canSpy(false, true, false)); // true
console.log("Signal Prisoner:", canSignalPrisoner(false, true)); // true
console.log(
  "Free Prisoner (with dog):",
  canFreePrisoner(true, false, false, true)
); // true
console.log(
  "Free Prisoner (no dog):",
  canFreePrisoner(false, false, true, false)
); // true
console.log(
  "Free Prisoner (guard awake):",
  canFreePrisoner(true, true, true, false)
); // false
