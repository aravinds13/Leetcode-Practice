/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const sArray = sentence.split(' ');
    const wordCount = sArray.length;

    if(sArray[0][0] != sArray[wordCount-1][sArray[wordCount-1].length-1]){
        return false;
    }

    for(let i=0; i<wordCount-1; i++){
        if(sArray[i][sArray[i].length-1] != sArray[i+1][0]){
            return false;
        }
    }

    return true;
};