/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    console.log(s, part)
    const sLength = s.length;
    const partLength = part.length;
    
    if(partLength>sLength || partLength==0){
        return s;
    }
    
    let clean = false;

    while(!clean) {
        let tempString = s.replace(part,'')
        if(tempString == s ){
            clean = true;
        }
        else{
            s = tempString;
        }
    }

    return s;
};