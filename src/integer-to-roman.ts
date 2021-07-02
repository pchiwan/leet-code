const INT_TO_ROMAN_MAP = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
}

const INTEGERS = Object.keys(INT_TO_ROMAN_MAP).reverse()

function intToRoman (n: number): string {
  if (n < 1 || n > 4000) {
    throw new Error('Cannot convert numbers smaller than 1 or bigger than 4000')
  }

  let output = ''
  let rest = n

  for (let k = 0; k < INTEGERS.length; k++) {
    const int = parseInt(INTEGERS[k])
    const q = Math.floor(rest / int )
    output += q ? Array(q).fill(INT_TO_ROMAN_MAP[int]).join('') : ''
    rest -= int * q
  }

  return output
}

console.log(intToRoman(3) === 'III')
console.log(intToRoman(4) === 'IV')
console.log(intToRoman(9) === 'IX')
console.log(intToRoman(58) === 'LVIII')
console.log(intToRoman(1994) === 'MCMXCIV')
