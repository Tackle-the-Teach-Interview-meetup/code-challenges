// The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. 

//The starting number will always be less than or equal to the ending number. 

//Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

//1

function rangeOfNumbers(startNum, endNum) {
    if(endNum - starNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum -1);
        numbers.push(endNum);
        return numbers;
    }
};

//2 
// concat is not just for string. concat is for arrays too.
//immutable too - The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum ? [startNum] : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

