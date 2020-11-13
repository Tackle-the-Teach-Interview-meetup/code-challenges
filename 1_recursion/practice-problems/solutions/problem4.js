//Calculate the sum of elements of an array of numbers

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = (arr, i) => {
  if (i == 0){
    return arr[0]
  }
  return arr[i] + sum(arr, i - 1)
}

console.log(sum(arr, arr.length - 1))


//iterative solution
// const sum = ar => {
//   let sum = 0;
//   for(let el of ar){
//       sum += el;
//   }
//   return sum;
// }