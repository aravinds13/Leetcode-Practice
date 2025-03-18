/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sLength = s.length;
    let maxCount = 0;
    const subStringMap = new Map();
    let startOfSubstring = 0;

    for (let i = 0; i < sLength; i++) {
        if (subStringMap.has(s[i])) {
            startOfSubstring = Math.max(startOfSubstring, subStringMap.get(s[i]) + 1);
        }

        subStringMap.set(s[i], i);
        maxCount = Math.max(maxCount, i - startOfSubstring + 1);
    }

    return maxCount;
};