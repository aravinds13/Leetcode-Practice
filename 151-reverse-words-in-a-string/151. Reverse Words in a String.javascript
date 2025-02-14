/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strArray = [...s.split(" ")];
    let trimmedArray =[]
    strArray.forEach((element)=>{
        if(element.trim() != ""){
            trimmedArray.push(element);
        } 
    })
    return trimmedArray.reverse().join(" ");
};