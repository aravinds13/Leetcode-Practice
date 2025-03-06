/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sLength = s.length;
    let maxCount = 0;
    const subStringMap = new Map();
    let start = 0;

    for (let i = 0; i < sLength; i++) {
        if (subStringMap.has(s[i])) {
            start = Math.max(start, subStringMap.get(s[i]) + 1);
        }

        subStringMap.set(s[i], i);
        maxCount = Math.max(maxCount, i - start + 1);
    }

    return maxCount;
};