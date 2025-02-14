/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m==0){
        nums1.splice(0,n);
        nums1.push(...nums2);
    }
    else if (n==0){
        nums1
    }
    else if (nums1[m-1] < nums2[0]){
        nums1.splice(m,n);
        nums1.push(...nums2);
    }
    else if (nums2[n-1] < nums1[0]){
        nums1.splice(m,n);
        nums1.unshift(...nums2);
    }
    else{
        nums1.splice(m,n);
        var i=0, j=0;
        var array1=[];
        while(i<m || j<n){
            if(j==n){
                array1.push(...nums1.splice(i,m))
                break;
            }
            else if(nums1[i]<=nums2[j]){
                array1.push(nums1[i]);
                i++;
            }
            else{
                array1.push(nums2[j]);
                j++;
            }
        }
        nums1.splice(0,m);
        nums1.push(...array1);
    }
};