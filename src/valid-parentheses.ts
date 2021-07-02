/**
 * https://leetcode.com/problems/valid-parentheses/
 */

const OPENING_BRACKETS = ['(', '{', '['];
const MATCHING_BRACKETS = {
  ')': '(',
  '}': '{',
  ']': '['
};

function isValid (input: string): boolean {
  const openingBrackets = [];

  for (let i = 0, l = input.length; i < l; i++) {
    if (OPENING_BRACKETS.includes(input[i])) {
      openingBrackets.push(input[i]);
    } else {
      const lastOpeningBracket = openingBrackets[openingBrackets.length - 1];
      if (MATCHING_BRACKETS[input[i]] !== lastOpeningBracket) {
        return false;
      }
      openingBrackets.pop();
    }
  }

  return openingBrackets.length === 0;
}

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
