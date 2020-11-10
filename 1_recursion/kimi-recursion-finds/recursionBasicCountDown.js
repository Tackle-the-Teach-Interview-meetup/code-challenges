//recursion - if n is 5 go to else and define variable as equal to the output of the current function but passing n-1 instead of just passing n. Using unshift method countArray get n added to the begging of itself so the numbers go in descending order

//If we have push method then n is passed through function. countArray gets defined but does nothing with it and so function goes to the next part which is to push n into countArray

function countdown(n) {
    if (n < 1) {
      return [];
    } else { 
       let countArray = countdown(n-1);
       countArray.unshift(n);
       //  countArray.push(n);
       return countArray;
    }
  }

  countdown(5)
  //output [5,4,3,2,1]