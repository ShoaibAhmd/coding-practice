/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const results = [];

    // Sort the array to make it easier to avoid duplicates and use two pointers
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let currentNum = nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = currentNum + nums[left] + nums[right];

            if (sum === 0) {
                results.push([currentNum, nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++
            } else {
                right--;
            }
        }

    }


    return results;
};

console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])))