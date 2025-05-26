/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let prefixLength = prefix.length;
    const strsLength = strs.length;
    for(let i=1; i<strsLength; i++){
        let string = strs[i];
        while(prefix !== string.substring(0,prefixLength)){
            prefixLength--;
            if(prefixLength == 0){
                return '';
            }
            prefix = prefix.substring(0, prefixLength)
        }
    }
    return prefix
};