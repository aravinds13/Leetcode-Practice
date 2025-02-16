/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const countMap = new Map();
    const stringLength = s.length;
    
    for(i=0; i<stringLength; i++){
        var charPos = countMap.get(s.charAt(i));
        if(!charPos){
            countMap.set(s.charAt(i),[i]);
        }
        else{
            charPos.push(i);
            countMap.set(s.charAt(i),charPos);
        }
    }

    var uniqueCharPosition = -1;

    for (const entry of countMap.entries()) {
        if(entry[1].length == 1){
            uniqueCharPosition = entry[1][0];
            break;
        }
    }

    return uniqueCharPosition;
};