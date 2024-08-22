const promiseA = new Promise((resolve, reject) => {

    // setTimeout(() => {
    //     resolve("resolve");
    // });

    resolve("resolve");


    // setTimeout(() => {
    //     reject("reject")
    // }, 5000)

})

setTimeout(() => {
    console.log('setTimeout');
})

promiseA.then((data) => {
    console.log('resolved data ==>>', data);
});

// promiseA.catch((data) => {
//     console.log('rejected data ==>>', data);
// });

// will be pending because of the setTimeout
console.log('promise >', promiseA);
