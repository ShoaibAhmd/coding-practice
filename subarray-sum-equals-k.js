/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    sumEqualsKCount = 0;
    currentSum = 0;
    const prefixSumMap = { 0: 1 };


    nums.forEach((value, index) => {
        currentSum += value;

        if (prefixSumMap[currentSum - k]) {
            sumEqualsKCount += prefixSumMap[currentSum - k];
        }

        prefixSumMap[currentSum] = (prefixSumMap[currentSum] || 0) + 1;

        // if (index === 0) {
        //     prefixSum.push(value);
        // } else {
        //     prefixSum[index] = value + prefixSum[index - 1];
        // }

        // for (let i = 0; i <= index; i++) {
        //     const sum = prefixSum[index] - (prefixSum[i - 1] || 0);

        //     if (sum === k) {
        //         sumEqualsKCount += 1;
        //         subArray.push([i, index]);
        //     }
        // }
    });

    console.log(sumEqualsKCount)

    return sumEqualsKCount;

};

subarraySum([1, 1, 1], 2);