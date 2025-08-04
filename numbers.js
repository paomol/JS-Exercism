export function twoSum(array1, array2) {
  let k = 0;
  let m = 0;
  k = Number(array1.join(""));
  m = Number(array2.join(""));
  return k + m;
}

export function luckyNumber(value) {
  let m = "";
  let n = "";
  let r = 0;
  m = String(value);
  const splits = m.split(/(\d)/);
  n = Number(splits.reverse().join(""));

  if (value == n) {
    r = true;
  } else {
    r = false;
  }

  return r;
}

export function errorMessage(input) {
  if (Boolean(input) == false) {
    return "Required field";
  } else if (Boolean(Number(input)) == false) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}

//Sample usage for testing:
console.log(twoSum([1, 2, 3], [0, 7])); // 130
console.log(luckyNumber(1441)); // true
console.log(luckyNumber(123)); // false
console.log(errorMessage("123")); // ''
console.log(errorMessage("")); // 'Required field'
console.log(errorMessage("abc")); // 'Must be a number besides 0'
