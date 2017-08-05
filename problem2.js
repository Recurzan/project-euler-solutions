/*this solution was written without the use of mod 2, although that
would also be just as appropriate.

I recognized a pattern in the fibonacci sequence that allowed me to save computation time by directly referencing the even fibonacci numbers in the generated array of fibonacci numbers and add it to the sum rather than trying to check each fibonacci number in the array for "even-ness"*/

function genFibonacciNumbers(n) { //generates fibonacci numbers < n
  var trailNum = 0;
  var leadNum = 0;
  var nextNum = 1;
  var fibonacciArray = [0];
  while (nextNum < n) {
    if (nextNum < n) {
      fibonacciArray.push(nextNum);
      trailNum = leadNum;
      leadNum = nextNum;
      nextNum = trailNum + leadNum;
    }
  }
  return fibonacciArray;
}
function evenFibonacciNums() { //sums the even fibonacci numbers
  var myFibonacci = genFibonacciNumbers(4000000);
  var evenFibonacciNumSum = 0;
  for (var i = 0; i < myFibonacci.length; i+= 3) {
    evenFibonacciNumSum += myFibonacci[i];
  }
}
