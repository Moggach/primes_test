//test to see if a number is prime

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//function logs out prime values upto n
function primesArray(n) {
  //initialising array with 2
  let primes = [2];
  //looping over values 3-100 and testing for prime numbers using isPrime()
  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

//testing primesArray function
console.log(primesArray(100));
console.log(primesArray(50));
