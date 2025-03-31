/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const sArray = sentence.split(' ');
    const wordCount = sArray.length;

    if(sArray[0].split('')[0] != sArray[wordCount-1].split('')[sArray[wordCount-1].length-1]){
        return false;
    }

    for(let i=0; i<wordCount-1; i++){
        if(sArray[i].split('')[sArray[i].length-1] != sArray[i+1].split('')[0]){
            return false;
        }
    }

    return true;
};