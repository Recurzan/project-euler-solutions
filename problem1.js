function getSumMultiples(n) {
  var sumMultiples = 0; //stores the sum of multiples
  var i = n-1;
  var j = n-1;
  while (i > 0) { //loop for multiples of 3
    if (i%3 === 0) {
      sumMultiples = sumMultiples + i;
      i -= 3; //once a multiple is found, decrement current multiple with 3 for the next multiple
    }
    else { //if multiple not found, decrement i by one.
      i--;
    }
  }
  while (j > 0) { //loop for multiples of 5, same idea as above loop.
    if (j%5 === 0) {
      sumMultiples = sumMultiples + j;
      j -= 5;
    }
    else {
      j--;
    }
  }
  return sumMultiples;
}
console.log(getSumMultiples(10)); //prints out the sum of multiples to the console.
