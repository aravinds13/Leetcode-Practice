/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const sLength = s.length;
    let currentCount = 0;
    let maxCount = 0;
    // let sArray = s.split('');
    const substringSet = new Set();

    for(let i=0; i<sLength; i++){
        for(let j=i; j<sLength; j++){
            if(!substringSet.has(s[j])){
                substringSet.add(s[j]);
                currentCount++;
            }
            else{
                substringSet.clear();
                break;
            }
        }
        maxCount = Math.max(currentCount, maxCount);
        currentCount = 0;
    }

    return maxCount;
};