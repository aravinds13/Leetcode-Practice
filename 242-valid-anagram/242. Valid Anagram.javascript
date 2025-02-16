/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const mapS = new Map();
    const mapT = new Map();

    const sLength = s.length;
    const tLength = t.length;

    s = s.trim();
    t = t.trim();

    var isAnagram = true;

    if(sLength!=tLength){
        return false;
    }

    for(var i = 0; i<sLength; i++){
        if(!mapS.get(s[i])){
            mapS.set(s[i],1);
        }
        else{
            mapS.set(s[i], mapS.get(s[i])+1);
        }
        if(!mapT.get(t[i])){
            mapT.set(t[i],1);
        }
        else{
            mapT.set(t[i], mapT.get(t[i])+1);
        }
    }

    for(var i = 0; i<sLength; i++){
        if(mapS.get(s[i]) != mapT.get(s[i])){
            isAnagram = false;
        }
    }
    return isAnagram;
};
