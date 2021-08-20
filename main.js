//declaring global variable input
var input;

//funtion to handle form submit and update input value
function onSubmit(e) {
  e.preventDefault();
  input = document.getElementById('number').value;
  const data = multiplyPrimes(input);
  console.log(data);
  const output = `
  <div class="output-primes">
  <p>${data}</p>
  </div>`;
  const display = document.getElementById('output-primes');
  display.innerHTML = output;
}

//adding event listener to submit button
document.getElementById('submit').addEventListener('click', onSubmit);

//function testing to see if number is prime using seive of Eratosthenes
function isPrime(input) {
  const numberSqrt = Math.floor(Math.sqrt(input));
  let i = 2;
  while (i <= numberSqrt) {
    if (input % i === 0) {
      return false;
    }

    i += 1;
  }

  return true;
}

//creates array of prime values
function primesArray(input) {
  //initialising array
  let primes = [];
  //avoid returning 1 as a prime value
  let i = 2;

  //setting condition - total number of values returned should be equal to n
  while (primes.length < input) {
    //if i passes prime test add it to the array
    if (isPrime(i)) {
      primes.push(i);
    }
    //increment in and add 1 to i
    i += 1;
  }
  return primes;
}

//function to generate nested array for multiplication table
function multiplyPrimes(input) {
  let primes = primesArray(input);
  let initArr = ['|'].concat(primes);

  let product = [initArr];

  primes.forEach(function (prime) {
    let nextRow = [prime];

    primes.forEach(function (coefficient) {
      nextRow.push(prime * coefficient);
    });

    product.push(nextRow);
  });

  return product;
}
