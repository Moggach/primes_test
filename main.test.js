function equal(actual, expected, message) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info('Pass: ' + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error('Fail: ' + (message || defaultMessage));
  }
}

function notEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info('Pass: ' + (message || defaultMessage));
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error('Fail: ' + (message || defaultMessage));
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

//testing isPrime
test('isPrime should return true in input is a prime number', () => {
  equal(isPrime(2), true);
  equal(isPrime(6), false);
});

//testing primesArray
test('given an input (n) should return an array of primes of length (n)', () => {
  equal(primesArray(5), [2, 3, 5, 7, 11]);
  equal(primesArray(10), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});

//testing multiplyPrimes
test('given an input (n) should return a nested array of multiples of the zero indexed array', () => {
  equal(multiplyPrimes(5), [
    [' ', 2, 3, 5, 7, 11],
    [2, 4, 6, 10, 14, 22],
    [3, 6, 9, 15, 21, 33],
    [5, 10, 15, 25, 35, 55],
    [7, 14, 21, 35, 49, 77],
    [11, 22, 33, 55, 77, 121],
  ]);
  equal(multiplyPrimes(3), [
    [' ', 2, 3, 5],
    [2, 4, 6, 10],
    [3, 6, 9, 15],
    [5, 10, 15, 25],
  ]);
});
