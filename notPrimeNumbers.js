// You are given two positive integers a and b (a < b <= 20000). 
// Complete the function which returns a list of all those numbers in the interval [a, b) 
// whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

//     Be careful about your timing!
function notPrimes(a,b){
    let iString = ''
    let iStringChar = ''
    let primeArray1 = [];
    let primeArray2 = [];
    let squ;
    let primeTest;
    // loop through interval a - b
    for (let i = a; i <= b; i++) {
        //console.log(i);
        // turn i into a string for parsing
        iString = i.toString();
        iString = iString.replace(0, 'X');
        iString = iString.replace(1, 'X');
        iString = iString.replace(4, 'X');
        iString = iString.replace(6, 'X');
        iString = iString.replace(8, 'X');
        iString = iString.replace(9, 'X');
        //console.log(iString);
        //console.log(iString.length);
        // check each stringlet for X and make new array
        if (iString.search('X') === -1) {
            primeArray1.push(iString);
            console.log(primeArray1);
        };
        for (let j = 0; j < primeArray1.length; j++) {
          squ = primeArray1[j];
          for (let k = 2; k <= Math.sqrt(squ); k++) {
              if (squ % j !== 0) {
                primeArray2.push(squ);
              };
          };
          console.log(primeArray2);
        };
    };
    return primeArray2;
}

//stolen code that checks for numbers up to an input value being prime.
// my output is an array so this test must be modified
function printPrime(value) {
    var primes = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
        console.log(primes);
    }
    var limit = Math.sqrt(value);
    for(var i = 2; i < limit; i++) {
        console.log(i);
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                console.log(j);
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        console.log(i);
        if(primes[i] === true) {
            console.log(i + " " + primes[i]);
        };
    };
};
let myOutput = (notPrimes(1, 15));
console.log(printPrime(myOutput));