function hasUniqueChars(str){
    let strArr = [];
    for (let x in str) {
        strArr.push(str[x]);
    };
    let sortStrArr = strArr.sort();
    let strReturn = true;
    for (let y = 0, z = 1; y < sortStrArr.length; y++, z++) {
        if (sortStrArr[y] === sortStrArr[z]) {
            return false;
        } else {
            strReturn = true;
        };
    };
    return strReturn
};
    

console.log(hasUniqueChars('1923456788'));