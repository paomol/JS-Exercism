export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
  const dayratevalue = dayRate(ratePerHour);
  return Math.floor(budget / dayratevalue);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const month = 22;
  const dayratevalue = dayRate(ratePerHour);
  const monthcomplete = month * Math.floor(numDays / month);
  const discounttotal = monthcomplete * (1 - discount);

  return Math.ceil(
    dayratevalue * discounttotal + dayratevalue * (numDays - monthcomplete)
  );
}

// Sample usage for testing:
console.log("dayRate: ", dayRate(89)); // 712
console.log("daysInBudget: ", daysInBudget(20000, 89)); // 28
console.log(
  "priceWithMonthlyDiscount: ",
  priceWithMonthlyDiscount(89, 230, 0.42)
); // 97972
