// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, F, M) {
    // Implement your solution here
    let sumA = 0;
    let difference = 0;
    let totalRolls = A.length + F;
    let possibleCombos = [];

    for (let i = 0; i < A.length; i++) {
        sumA += A[i];
    }

    difference = (M * totalRolls) - sumA;

    if (difference < (F * 6) || difference > F) {
        return [0];
    }

    let possibleNum = difference / F;
    let possibleCombo = 0;
    let possibleArray = [];

    for (let i = 0; i < F; i++) {
        possibleArray.push(possibleNum);
    }

    if (difference % F === 0) {
        return possibleArray;
    } else {
        for (let i = 0; i < possibleArray.length; i++) {
            for (let j = possibleNum; j <= 6; j++) {
                let sum = 0
                for (let k = 0; k < possibleArray.length; k++) {
                    if (i === k) {
                        sum += possibleNum;
                    } else {
                        sum += possibleArray[k]
                    }
                }
                possibleArray[i] = possibleNum;
                if (sum === difference) {
                    return possibleArray;
                }
            }
        }
    }

}
