/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let stack = [];
    let result = [];
    const patternLength = pattern.length;
    let counter = 1;
    for(let index = 0; index<patternLength+1; index++){
        stack.push(counter)
        if(pattern.charAt(index) == 'I'){
            result.push(...stack.reverse());
            stack = []
        }
        counter++;
    }
    
        result.push(...stack.reverse()); 
    return result.join('')
};