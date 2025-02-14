/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var tempStringArray = s.trim().split(" ");
    var stringArray = [];
    tempStringArray.forEach((element)=>{
        if(element.trim().length > 0){
            stringArray.push(element)
        }
    })
    return stringArray.reverse().join(" ")
};