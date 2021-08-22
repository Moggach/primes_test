//declaring global variable input
let input;

//declaring global variable result
let result;

//funtion to handle form submit and update input value
function onSubmit(e) {
  e.preventDefault();
  input = document.getElementById('number').value;

  if (input == 1) {
    alert('oops, please enter the number 2 or larger');
    return false;
  }

  const data = multiplyPrimes(input);

  result = data.map(function (subArray) {
    return `<div class="row">${subArray.join('|')}</div>`;
  }); //O(n)

  const output = `
  <div class="output-table">
  
   ${result.join('')}
  </div>`;
  const display = document.getElementById('output-table');
  display.innerHTML = output;
  display.scrollIntoView({ behavior: 'smooth' });
}

//adding event listener to submit button
document.getElementById('submit').addEventListener('click', onSubmit);

//function testing to see if number is prime using seive of Eratosthenes - O(N log (log N))
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

//creates array of prime values - O(n)
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

//function to generate nested array for multiplication table - O(n2)
function multiplyPrimes(input) {
  let primes = primesArray(input);
  let initArr = [' '].concat(primes);

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
