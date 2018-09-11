function hasUniqueChars(str){
    let strArr = [];
    for (let x in str) {
        strArr.push(str[x]);
    };
    let sortStrArr = strArr.sort();
    let strReturn = undefined;
    console.log(sortStrArr);
    for (let y = 0, z = 1; y < sortStrArr.length; y++, z++) {
        console.log(sortStrArr[y]);
        console.log(sortStrArr[z]);
        if (sortStrArr[y] === sortStrArr[z]) {
            return false;
        } else {
            strReturn = true;
        };
    };
    return strReturn
};
    

console.log(hasUniqueChars('1923456789'));