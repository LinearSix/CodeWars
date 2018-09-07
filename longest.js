function longest(arr, n) {
    // loop n times
    let longestLength = 0;
    let longestIndex;
    let testArray = [];
    while (n > 1) {
        console.log(n)
        // set some variables to keep track of longest length and index
        longestLength = 0;
        longestIndex = undefined;
;       // loop through array, set variables to current longest and splice it out
        for (let i in arr) {
            // console.log(arr[i].length);
            if (arr[i].length > longestLength) {
                longestLength = arr[i].length;
                longestIndex = i;
            };
        };
        console.log(longestIndex);
        arr.splice((longestIndex), 1);
        console.log(arr)
    n --;
    };
    for (let i in arr) {
        // console.log(arr[i].length);
        if (arr[i].length > longestLength) {
            longestLength = arr[i].length;
            longestIndex = i;
        };
    };
    return arr[longestIndex];
};

// console.log(longest(['Hell','Worlds','Codewars','Katas', 'fives', 'rat'], 3));
console.log(longest(['1','22','333','4444', '55555', '666666'], 2));