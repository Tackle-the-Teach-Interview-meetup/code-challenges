
//you tube video All Things Javascript

var arr = [0,1,0, 100];

//function looks for val in arr
const countOccur = function(arr,val) {
return arr.reduce((acc,elem) => {
return (val === elem ? acc + 1 : acc)
},0)
}

console.log(countOccur(arr, 100));

//0 is the init value of the accumulator
//acc is going to be the single value that will be returned
//acc is going to be what you want to get back



}