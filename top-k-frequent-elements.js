/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    numsDict = {};
    kFrequent = [];
    for (let i=0; i<nums.length; i++) {
        if (numsDict[nums[i]]) {
            numsDict[nums[i]][1] += 1;
        } else {
            numsDict[nums[i]] = [nums[i], 1];
        }
    }

    return numsDict;
};

console.log(topKFrequent([2,2,3,3,1,1,1]));