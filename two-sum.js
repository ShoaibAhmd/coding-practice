/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const hashmap = {};

    for (let i = 0; i < nums.length; i++) {

        const compliment = target - nums[i];

        if (compliment in hashmap) {
            const indeces = [hashmap[compliment], i];
            return indeces;
        }

        hashmap[nums[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9))