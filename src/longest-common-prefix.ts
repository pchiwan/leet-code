/**
 * https://leetcode.com/problems/longest-common-prefix/
 */

function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = "";
  let stringIndex = 0;

  while (stringIndex < strs[0].length) {
    const prefix = strs[0].substr(0, stringIndex + 1);
    if (strs.every((s) => s.startsWith(prefix))) {
      commonPrefix = prefix;
      stringIndex++;
    } else {
      break;
    }
  }

  return commonPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]) === "fl");
console.log(
  longestCommonPrefix(["volleyball", "volcano", "volunteer"]) === "vol"
);
console.log(longestCommonPrefix(["dog", "racecar", "car"]) === "");
