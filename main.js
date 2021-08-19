//test to see if a number is prime

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//function logs out prime values
function primesArray(n) {
  //initialising array
  let primes = [];
  //avoid returning 1 as a prime value
  let i = 2;

  //setting condition - total number of values returned should be equal to n
  while (primes.length < n) {
    //if i passes prime test add it to the array
    if (isPrime(i)) {
      primes.push(i);
    }
    //increment in and add 1 to i
    i += 1;
  }
  return primes;
}

//function testing to see if number is prime using seive of
function isPrime(num) {
  const squareRoot = Math.sqrt(num);

  for (let i = 2; i < squareRoot; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//testing primesArray function
console.log(primesArray(100));
console.log(primesArray(1000));

//building template string for multiplication table
function outputPrimes() {
  const number = document.getElementById('number').value;
  const output = `
<div class="output-primes">
<p>${number}</p>
</div>`;
  const display = document.getElementById('output-primes');
  display.innerHTML = output;
}

//funtion to handle form submit
function onSubmit(e) {
  e.preventDefault();
  outputPrimes();
}

//adding event listener to submit button
document.getElementById('submit').addEventListener('click', onSubmit);
