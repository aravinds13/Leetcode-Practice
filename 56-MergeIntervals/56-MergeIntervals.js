/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    var sortedArray = intervals.sort(function(a,b){return a[0]-b[0]});
    var i = 0;
    while(i<sortedArray.length-1) {
        // if the next interval is completely overlapped by the current interval
        if(sortedArray[i][1]>=sortedArray[i+1][0] && sortedArray[i][1]>=sortedArray[i+1][1]) {
            sortedArray.splice(i+1,1);
        }
        else if(sortedArray[i][1]>=sortedArray[i+1][0]){
            sortedArray[i][1] = sortedArray[i+1][1]
            sortedArray.splice(i+1,1);
        }
        else{
            i+=1
        }
    }
    return sortedArray
};