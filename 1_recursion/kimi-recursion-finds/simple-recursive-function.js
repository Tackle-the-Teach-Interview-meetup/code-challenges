// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    //base case is if n is still less than or equal to n (the number determining number of times to run the function else end it)
    if(n <= 0) {
      return 0;
    }
  return sum(arr, n - 1) + arr[n-1];
  }
  
  var answer = sum([1,45,2,88], 3);
  
  console.log(answer);