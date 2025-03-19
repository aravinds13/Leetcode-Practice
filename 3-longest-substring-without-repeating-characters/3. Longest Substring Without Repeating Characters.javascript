/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sLength = s.length;
    const substringMap = new Map();
    let maxCount = 0;
    let startOfSubstring = 0;

    for(let i=0; i<sLength; i++){
        if(substringMap.has(s[i])){
            startOfSubstring = Math.max(startOfSubstring, substringMap.get(s[i])+1);
        }
        substringMap.set(s[i],i)
        maxCount = Math.max(maxCount, i- startOfSubstring+1);
    }
    return maxCount
};