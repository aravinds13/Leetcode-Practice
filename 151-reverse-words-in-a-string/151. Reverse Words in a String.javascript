/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strArray = [...s.trim().split(" ")];
    let trimmedArray =[]
    strArray.forEach((element)=>{
        if(element.trim() != ""){
            trimmedArray.push(element);
        } 
    })
    return trimmedArray.reverse().join(" ");
};