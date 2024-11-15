// Problem - Give an integer n , find the facorial of that integer

function recursiveFactorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(4));

// Big O = O(n)
