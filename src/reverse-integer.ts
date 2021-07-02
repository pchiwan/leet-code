/**
 * https://leetcode.com/problems/reverse-integer/
 */

const MIN_INTEGER = Math.pow(2,31) * -1;
const MAX_INTEGER = Math.pow(2,31) - 1;

function reverse(x: number): number {
  const isNegative = x < 0;
  const str = Math.abs(x).toString().split('').reverse().join('');

  const value = isNegative ? Number(str) * -1 : Number(str)

  return isNegative
    ? value < MIN_INTEGER ? 0 : value
    : value > MAX_INTEGER ? 0 : value;
};


console.log(reverse(123) === 321);
console.log(reverse(-123) === -321);
console.log(reverse(120) === 21);
console.log(reverse(0) === 0);
console.log(reverse(-2147483648) === 0);
console.log(reverse(1563847412) === 0);
