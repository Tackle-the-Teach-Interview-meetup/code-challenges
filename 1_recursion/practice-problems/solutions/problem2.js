// Calculate factorial of n (n!). Reminder n! = 1 * 2 * ... * n

const factorial = n => {
	if (n <= 1){
		return 1
	}
	return n * factorial(n - 1)
}

console.log(factorial(10))



//versus iterative solution
// const factorial = n => {
//   let prod = 1
//   for(var i = 1; i <= n; i++){
//     prod *= i
//   }
//   return prod
// }