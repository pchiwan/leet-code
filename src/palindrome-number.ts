/**
 * https://leetcode.com/problems/palindrome-number/
 */

/*
function isPalindrome(x: number): boolean {
    const numberString = x.toString();

    let lPointer = 0;
    let rPointer = numberString.length - 1;

    while (lPointer < numberString.length) {
        if (numberString[lPointer] !== numberString[rPointer]) {
            return false;
        }
        lPointer++;
        rPointer--;
    }
    return true;
};
*/

function isPalindrome(x: number): boolean {
  const numberString = x.toString();
  const reversedString = numberString.split('').reverse().join('');
  return numberString === reversedString;
}

console.log(isPalindrome(121) === true);
console.log(isPalindrome(-121) === false);
console.log(isPalindrome(10) === false);
console.log(isPalindrome(-101) === false);
console.log(isPalindrome(1234321) === true);
