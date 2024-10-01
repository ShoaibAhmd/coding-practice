// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(N) {
//     // Implement your solution here
//     let gapLength = 0;
//     let largestGap = 0;
//     let receivedOne = false;
//     const binaryString = N.toString(2);

//     for (let i = 0; i < binaryString.length; i++) {
//         let currentBit = binaryString[i];
//         if (receivedOne) {
//             if (currentBit === '0') {
//                 gapLength++;
//             } else {
//                 if (gapLength > largestGap) {
//                     largestGap = gapLength;
//                 }
//                 gapLength = 0;
//             }

//         }

//         if (currentBit === '1') {
//             receivedOne = true
//         }
//     }

//     return largestGap;
// }

// class Student {
//     constructor() {
//         this.name = "Abdul Raheem";
//     }

//     printName() {
//         console.log("name =>", this.name);
//     }

//     run() {
//         console.log("name =>", this.name); // 5
//         setTimeout(() => {
//             console.log("name =>", this.name);
//         }, 0);
//         this.name = "Abdul Raheem 2";
//     }
// }

// console.log(solution(561892)); // 5

// const student = new Student();

// student.run(); // Abdul Raheem

// console.log('Start');

// Promise.resolve().then(() => console.log('Microtask 1'));
// Promise.resolve().then(() => console.log('Microtask 2'));

// setTimeout(() => console.log('Task 1'), 0);
// setTimeout(() => console.log('Task 2'), 0);

// console.log('End');


const arr = [1, 2, 3, 4];

// const newArr = arr.map((item) => {
//     console.log(arr);
//     return item;
// })

// for (let a of arr) {
//     console.log(a);
// }

// const myPromise = new Promise((resolve, reject) => {
//     resolve(1);
//     reject(2);
// });

// console.log(myPromise.then((data) => { console.log('resolved', data); }).catch((data) => { console.log('rejected', data) }));
// console.log(myPromise);

// const myFunc = function () {
//     console.log('myFunc', this.global);
// }

// myFunc();

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var gameOfLife = function (board) {
//     let newBoard = [];
//     for (let i = 0; i < board.length; i++) {
//         newBoard[i] = [];
//         for (let j = 0; j < board[i].length; j++) {
//             let currentCell = board[i][j];
//             let liveNeighbours = 0;

//             if (board[i + 1] && board[i + 1][j] === 1) {
//                 liveNeighbours++;
//             }

//             if (board[i - 1] && board[i - 1][j] === 1) {
//                 liveNeighbours++;
//             }

//             if (board[i][j + 1] === 1) {
//                 liveNeighbours++;
//             }

//             if (board[i][j - 1] === 1) {
//                 liveNeighbours++;
//             }

//             if (board[i + 1] && board[i + 1][j + 1] === 1) {
//                 liveNeighbours++;
//             }

//             if (board[i - 1] && board[i - 1][j - 1] === 1) {
//                 liveNeighbours++;
//             }

//             if (board[i - 1] && board[i - 1][j + 1] === 1) {
//                 liveNeighbours++;
//             }

//             if (board[i + 1] && board[i + 1][j - 1] === 1) {
//                 liveNeighbours++;
//             }

//             if (currentCell === 0) {
//                 if (liveNeighbours === 3) {
//                     newBoard[i][j] = 1;
//                 } else {
//                     newBoard[i][j] = 0;
//                 }
//             } else {
//                 if (liveNeighbours < 2 || liveNeighbours > 3) {
//                     newBoard[i][j] = 0;
//                 } else {
//                     newBoard[i][j] = 1;
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < newBoard.length; i++) {
//         for (let j = 0; j < newBoard[i].length; j++) {
//             board[i][j] = newBoard[i][j];
//         }
//     }

// };

var gameOfLife = function (board) {
    let newBoard = [];
    for (let i = 0; i < board.length; i++) {
        newBoard[i] = [];
        for (let j = 0; j < board[i].length; j++) {
            let currentCell = board[i][j];
            let liveNeighbours = 0;

            if (board[i + 1] && board[i + 1][j] === 1) {
                liveNeighbours++;
            }

            if (board[i - 1] && board[i - 1][j] === 1) {
                liveNeighbours++;
            }

            if (board[i][j + 1] === 1) {
                liveNeighbours++;
            }

            if (board[i][j - 1] === 1) {
                liveNeighbours++;
            }

            if (board[i + 1] && board[i + 1][j + 1] === 1) {
                liveNeighbours++;
            }

            if (board[i - 1] && board[i - 1][j - 1] === 1) {
                liveNeighbours++;
            }

            if (board[i - 1] && board[i - 1][j + 1] === 1) {
                liveNeighbours++;
            }

            if (board[i + 1] && board[i + 1][j - 1] === 1) {
                liveNeighbours++;
            }

            if (currentCell === 0) {
                if (liveNeighbours === 3) {
                    newBoard[i][j] = 1;
                } else {
                    newBoard[i][j] = 0;
                }
            } else {
                if (liveNeighbours < 2 || liveNeighbours > 3) {
                    newBoard[i][j] = 0;
                } else {
                    newBoard[i][j] = 1;
                }
            }
        }
    }

    for (let i = 0; i < newBoard.length; i++) {
        for (let j = 0; j < newBoard[i].length; j++) {
            board[i][j] = newBoard[i][j];
        }
    }

};

gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]); ``