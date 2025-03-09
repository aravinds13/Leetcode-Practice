/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */

 //let's try sliding window
var minimumRecolors = function(blocks, k) {
    //k is the size of the window
    const bLength = blocks.length;
    let minOps = 0
    if(bLength.length<k){
        return -1
    }

    for(let i=0; i<k; i++){
        if(blocks[i] == 'W'){
            minOps++;
        }
    }
    
    let currOps = minOps;

    for(let i=k; i<bLength; i++){
        if(blocks[i-k] == 'W'){
            currOps--;
        }
        if(blocks[i] == 'W'){
            currOps++;
        }
        minOps = Math.min(minOps, currOps);
    }

    return minOps
};