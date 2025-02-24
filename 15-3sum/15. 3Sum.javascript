/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    //keep i as constant and move j and k

    nums.sort((a,b)=>a-b);
    let tripletArray = [];
    const numsLength = nums.length;

    for(let i = 0; i<numsLength-2; i++){
        if(i>0 && nums[i]==nums[i-1]){
            continue
        }
        j=i+1;
        k=numsLength-1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            if(sum>0){
                k--;
            }
            else if(sum<0){
                j++
            }
            else{
                tripletArray.push([nums[i],nums[j],nums[k]]);
                
                j++;
                while(nums[j]==nums[j-1] && j<k){
                    j++;
                }
            }
        }
    }
    return tripletArray
};