/**
 * https://leetcode.com/problems/roman-to-integer/
 */

const ROMAN_TO_INT_MAP = {
  IX: 9,
  IV: 4,
  I: 1,
  V: 5,
  XL: 40,
  XC: 90,
  X: 10,
  L: 50,
  CD: 400,
  CM: 900,
  C: 100,
  D: 500,
  M: 1000,
}

const ROMAN_KEYS = Object.keys(ROMAN_TO_INT_MAP)

function romanToInt(s: string): number {
  let sum = 0
  let i = 0

  while (i < s.length) {
    for (let k = 0; k < ROMAN_KEYS.length; k++) {
      const substr = s.substr(i)
      const romanKey = ROMAN_KEYS[k]

      if (substr.startsWith(romanKey)) {
        sum += ROMAN_TO_INT_MAP[romanKey]
        i += romanKey.length
        break
      }
    }
  }

  return sum
}

console.log(romanToInt('III') === 3)
console.log(romanToInt('IV') === 4)
console.log(romanToInt('IX') === 9)
console.log(romanToInt('LVIII') === 58)
console.log(romanToInt('MCMXCIV') === 1994)
