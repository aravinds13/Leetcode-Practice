/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums1Length = nums1.length;
    const nums2Length = nums2.length;
    let mergedArray = [];
    let j = 0;
    let k = 0;

    if(nums1Length==0){
        mergedArray.push(...nums2)
    }
    else if(nums2Length==0){
        mergedArray.push(...nums1)
    }
    else{

        //use an index each to keep track of the current element of each array
        while(j<nums1Length && k<nums2Length) {
            if(nums1[j]>nums2[k]){
                mergedArray.push(nums2[k]);
                k++;
            }
            else if(nums1[j]<nums2[k]){
                mergedArray.push(nums1[j]);
                j++;
            }
            else {
                mergedArray.push(nums2[k]);
                mergedArray.push(nums1[j]);
                k++;
                j++;
            }
        }
        if(k<j || k<nums2Length){
            mergedArray.push(...nums2.slice(k,nums2Length))
        }
        if(j<k || j<nums1Length){
            mergedArray.push(...nums1.slice(j,nums1Length))
        }
    }

    let medianIndex = mergedArray.length%2 == 0 ? (mergedArray.length/2) : Math.floor(mergedArray.length/2) ;

    if(mergedArray.length%2 != 0){
        return mergedArray[medianIndex];
    }
    else{
        //medianIndex-1 is used because the length of array will be a number higher than the last index
        let median = (mergedArray[medianIndex-1] + mergedArray[medianIndex])/2

        return median;
    }
};