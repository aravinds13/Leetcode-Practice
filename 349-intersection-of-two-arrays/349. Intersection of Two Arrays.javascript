/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);

    return [...(nums1Set.intersection(nums2Set))]
};