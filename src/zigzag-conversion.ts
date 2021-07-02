/**
 * https://leetcode.com/problems/zigzag-conversion/
 */

function convert(s: string, numRows: number): string {
  if (s.length < numRows) {
    return s;
  }

  const rows = Array(numRows).fill('');
  let index = 0;

  while (index < s.length) {
    for (let r = 0; r < numRows && index < s.length; r++) {
      rows[r] += s[index];
      index++;
    }

    if (index === s.length) {
      break;
    }

    for (let r = numRows - 2; r > 0 && index < s.length; r--) {
      rows[r] += s[index];
      index++;
    }
  }

  return rows.join('');
};


//console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');
//console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');
//console.log(convert('A', 1) === 'A');
//console.log(convert('A', 2) === 'A');
//console.log(convert('ABC', 2) === 'ACB');
console.log(convert('ABCDE', 4) === 'ABCED');
