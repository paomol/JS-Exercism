export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${age >= 50 ? "mature" : "young"} fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

export function costOf(sign, currency) {
  return `Your sign costs ${sign.length * 2 + 20}.00 ${currency}.`;
}

//Sample usage for testing:
console.log(buildSign("Birthday", "Rob")); // 'Happy Birthday Rob!'
console.log(buildBirthdaySign(50)); // 'Happy Birthday! What a mature fellow you are.'
console.log(buildBirthdaySign(45)); // 'Happy Birthday! What a young fellow you are.'
console.log(graduationFor("Hannah", 2022)); // 'Congratulations Hannah!\nClass of 2022'
console.log(costOf("Happy Birthday Rob!", "dollars")); // 'Your sign costs 58.00 dollars.'
