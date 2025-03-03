/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    const sLength = s.length;
    const sArray = s.split('');
    const tArray = t.split('')
    if(sLength != t.length){
        return false;
    }

    const sMap = new Map();
    const tMap = new Map();

    for(let i=0; i<sLength; i++){
        if(sMap.has(sArray[i])){
            let count = sMap.get(sArray[i]);
            sMap.set(sArray[i], count+1);
        }
        else{
            sMap.set(sArray[i], 0);
        }
        if(tMap.has(tArray[i])){
            let count = tMap.get(tArray[i]);
            tMap.set(tArray[i], count+1);
        }
        else{
            tMap.set(tArray[i],0);
        }
    }

    let flag = true;

    sArray.forEach((item) => {
        console.log(sMap.has(item) && tMap.has(item))
        if(sMap.has(item) && tMap.has(item)){
            if(sMap.get(item) !== tMap.get(item)){
                flag = false;
            }    
        }
        else {
            flag = false;
        }
    })

    return flag;

    // this one is simple, but NOT anywhere near being efficient

    //return s.trim().split('').sort().join('') == t.trim().split('').sort().join('');
};