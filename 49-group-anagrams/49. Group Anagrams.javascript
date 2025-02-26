/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const strLength = strs.length;
    const strMap = new Map();

    let resultArray = []

    for(let i=0; i<strLength; i++){
        let sortedString = strs[i].split('').sort().join('');
        if(strMap.has(sortedString)){
            let vals = strMap.get(sortedString);
            strMap.set(sortedString, [...vals,i]);
        }
        else{
            strMap.set(sortedString,[i]);
        }
    }
    
    for(values of strMap.values()){
        let subArray = [];
        values.map((item) => {
            subArray.push(strs[item]);
        })
        resultArray.push(subArray);
    }

    return resultArray;
};