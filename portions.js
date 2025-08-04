export function cookingStatus(time) {
  if (time === 0) {
    return "Lasagna is done.";
  } else if (time > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
}

export function preparationTime(layers, xx) {
  let x;
  if (xx) {
    x = xx;
  } else {
    x = 2;
  }

  let h = layers.length;
  return h * x;
}

export function quantities(array) {
  let n = 0;
  let s = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "noodles") {
      n = n + 1;
    }
    if (array[i] === "sauce") {
      s = s + 1;
    }
  }
  const obj = {
    noodles: n * 50,
    sauce: s * 0.2,
  };
  return obj;
}

export function addSecretIngredient(friendList, myList) {
  let g = friendList[friendList.length - 1];
  myList.push(g);

  console.log(myList);
}

export function scaleRecipe(recipe, portions) {
  const empty = {};

  for (let a in recipe) {
    empty[a] = recipe[a] * (portions / 2);
  }
  return empty;
}

// Sample usage for testing:
console.log(cookingStatus(12)); // 'Not done, please wait.'
console.log(cookingStatus()); // 'You forgot to set the timer.'
console.log(
  preparationTime(
    ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"],
    3
  )
); // 18
console.log(
  preparationTime([
    "sauce",
    "noodles",
    "sauce",
    "meat",
    "mozzarella",
    "noodles",
  ])
); // 12
console.log(
  quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
); // { noodles: 100, sauce: 0.4 }
console.log(
  addSecretIngredient(
    ["noodles", "sauce", "mozzarella", "kampot pepper"],
    ["noodles", "meat", "sauce", "mozzarella"]
  )
); // ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']
console.log(
  scaleRecipe({ noodles: 200, sauce: 0.5, mozzarella: 1, meat: 100 }, 4)
); // { noodles: 400, sauce: 1, mozzarella: 2, meat: 200 }
