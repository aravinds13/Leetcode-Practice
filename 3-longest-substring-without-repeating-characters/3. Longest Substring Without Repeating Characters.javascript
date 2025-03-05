/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sLength = s.length;
    let maxCount = 0;
    const substringSet = new Set();

    for(let i=0; i<sLength; i++){
        for(let j=i; j<sLength; j++){
            if(substringSet.has(s[j])){
                break;
            }
            substringSet.add(s[j]);
        }
        maxCount = Math.max(substringSet.size, maxCount);
        substringSet.clear()
    }

    return maxCount;
};