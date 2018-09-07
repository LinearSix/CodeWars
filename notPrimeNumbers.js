function notPrimes(a, b) {
    console.log(a);
    console.log(b);
    for(let i = 2; i < b; i++) {
        if(b % i === 0) {
            console.log(i);
        } else {
            console.log(i);
        };
    };
};

// function notPrimes(a, b) {


// };
//     // strip items up to "a" from resulting array
//     let truncOutput = [];
//     for (let el in primeOutput) {
//         if (primeOutput[el] >= a) {
//             truncOutput.push(primeOutput[el]);
//         };
//     };
//     console.log(truncOutput);

//     let iString = ''
//     let primeArray = [];
//     // loop through interval a - b
//     for (let i of truncOutput) {
//         console.log(i);
//         // turn i into a string for parsing
//         iString = i.toString();
//         iString = iString.replace(0, 'X');
//         iString = iString.replace(1, 'X');
//         iString = iString.replace(4, 'X');
//         iString = iString.replace(6, 'X');
//         iString = iString.replace(8, 'X');
//         iString = iString.replace(9, 'X');
//         console.log(iString);
//         //console.log(iString.length);
//         // check each stringlet for X and make new array
//         if (iString.search('X') === -1) {
//             primeArray.push(iString);
//             console.log(primeArray);
//         };
//     };
//     return primeArray;
// };

console.log(notPrimes(10, 30));
//console.log(printPrime(10, 30));