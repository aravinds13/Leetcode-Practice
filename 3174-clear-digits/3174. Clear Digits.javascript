/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let clean = false;

    let arr = s.split('');
    let arrLen = arr.length;
    let currIndex = 0
    while(!clean){
        if(arrLen==0){
            break;
        }
        for(let i=currIndex;i<arrLen;i++){
            if(arr[i] >=0 && arr[i]<=9){
                if(i==0){
                    arr.splice(i,1);
                    arrLen-=1
                    
                }
                else{
                    arr.splice(i-1,2);
                    arrLen-=2

                }
                break;
            }
            if(i==arrLen-1){
                clean = true;
                
            }
        }
    }
    return arr.join('')
};