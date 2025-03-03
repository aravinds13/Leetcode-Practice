/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    let s1Array = sentence1.split(' ');
    let s2Array = sentence2.split(' ');
    let s1ArrayLength = s1Array.length;
    let s2ArrayLength = s2Array.length;


    if(s1ArrayLength<1 && s2ArrayLength<1 ){
        return false;
    }

    //make sure s1Array is longer
    if(s2ArrayLength > s1ArrayLength){
        [s1Array, s2Array] = [s2Array, s1Array];
        [s1ArrayLength, s2ArrayLength] = [s2ArrayLength,s1ArrayLength];
    }

    if(s2ArrayLength == 1 && (s2Array[0] == s1Array[0] || s2Array[0] == s1Array[s1ArrayLength-1])){
        return true
    }


    let frontFlag = false;
    let backFlag = false;
    for(let i=0, j=s1ArrayLength-1, k=s2ArrayLength-1; i<=k; ){

        if(s1Array[i] == s2Array[i]){
            i++;
        }
        else if(frontFlag && backFlag) {
            return false;
        }
        else {
            frontFlag = true;
        }

        if(s1Array[j] == s2Array[k]){
            j--;
            k--;
        }
        else if(frontFlag && backFlag){
            return false;
        }
        else {
            backFlag = true;
        }

        // if(s1Array[i] == s2Array[i] || s1Array[j] == s2Array[k]){
        //     continue
        // }
        // else{
        //     return false;
        // }
    }

    return true
};