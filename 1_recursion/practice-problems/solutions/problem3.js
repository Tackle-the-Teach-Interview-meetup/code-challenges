//Calculate the value of n to the m power

const exponent = (n, m) => {
  if (m == 0){
    return 1
  }
  if (m == 1){
    return n
  }
  return n * exponent(n, m - 1)
}

console.log(exponent(3, 2))


//versus iterative solution
// const exponent = (n, m) => {
//     let prod = 1
//     for(var i = 1; i <= m; i++){
//         prod *= n
//     }
//     return prod
// }