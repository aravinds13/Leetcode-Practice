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
        // if(s.split(part).join('') === s ){
        //     clean = true;
        // }
        // else{
        //     s = s.split(part).join('');
        // }
        if(s.replace(part,'') == s ){
            clean = true;
        }
        else{
            s = s.replace(part,'');
        }
    }

    return s;
};