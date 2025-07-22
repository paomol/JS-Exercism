export function getItem(cards, position) {
  return cards[position];
}

export function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
  if (cards.length == stackSize) {
    return true;
  } else {
    return false;
  }
}

// Sample usage for testing:
console.log(getItem([1, 2, 4, 1], 2)); // 4
console.log(setItem([1, 2, 4, 1], 2, 6)); // [1, 2, 6, 1]
console.log(insertItemAtTop([5, 9, 7, 1], 8)); // [5, 9, 7, 1, 8]
console.log(removeItem([3, 2, 6, 4, 8], 2)); // [3, 2, 4, 8]
console.log(removeItemFromTop([3, 2, 6, 4, 8])); // [3, 2, 6, 4]
console.log(insertItemAtBottom([5, 9, 7, 1], 8)); // [8, 5, 9, 7, 1]
console.log(removeItemAtBottom([8, 5, 9, 7, 1])); // [5, 9, 7, 1]
console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4)); // false
