//Calculate the sum of all natural numbers up to n

const addTo = n => {
	if (n == 0){
		return 0
	}
	return n + addTo(n - 1)
}

console.log(addTo(10))


//versus non-recursive (or iterative) solution
// const addTo = n => {
//   let sum = 0
//   for(var i = 1; i <= n; i++){
//     sum += i
//   }
//   return sum
// }