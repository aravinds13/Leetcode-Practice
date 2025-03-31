/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    sLength = s.length;
    if(sLength != goal.length){
        return false;
    }
    
    for(let i=0; i<=sLength; i++){
        if(s == goal){
            return true;
        }
        let char = s[sLength-1];
        let sArray = s.split('');
        sArray.pop();
        sArray.unshift(char);
        s = sArray.join('');
    }

    return false;
};