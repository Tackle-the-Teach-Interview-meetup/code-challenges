


var arr = [1,4,2,8,123,43,5643,32];

function quickSort(array) {

if(array.length <= 1){
return array;
}
var pivot= array[array.length-1];

var leftArr = [];
var rightArr = [];


for(let i=0; i < array.length-1;i++) {

if(array[i] < pivot) {
leftArr.push(array[i]);
} else {
rightArr.push(array[i]);
} 
}

var merged = [].concat.apply([], [quickSort(leftArr), pivot, quickSort(rightArr)]);

return merged ;


/* 
if (rightArr.length > 0 && leftArr.length > 0) {
[...quickSort(leftArr),pivot]
}
else if(leftArr.length > 0) {
return [...quickSort(leftArr),pivot];
} else {
return [pivot,...quickSort(rightArr)];
}
}  */
 
}
quickSort(arr);

console.log(quickSort(arr); //answer has array into array because answer from recursion are arrays

//useing spread operator you can just get the numbers because putting multiple arrays into one array? 







