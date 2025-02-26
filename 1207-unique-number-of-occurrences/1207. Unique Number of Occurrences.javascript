/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const uniqueMap = new Map();

    arr.map((item) => {
        if(uniqueMap.has(item)){
            uniqueMap.set(item, uniqueMap.get(item)+1);
        }
        else{
            uniqueMap.set(item, 1)
        }
    });

    const uniqueSet = new Set();
    for(value of uniqueMap.values()){
        uniqueSet.add(value);
    }

    return uniqueSet.size == uniqueMap.size
};