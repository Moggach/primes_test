//function testing to see if number is prime using seive of
function isPrime(num) {
  const numberSqrt = Math.floor(Math.sqrt(num));
  let i = 2;
  while (i <= numberSqrt) {
    if (num % i === 0) {
      return false;
    }

    i += 1;
  }

  return true;
}

//creates array of prime values
function primesArray(num) {
  //initialising array
  let primes = [];
  //avoid returning 1 as a prime value
  let i = 2;

  //setting condition - total number of values returned should be equal to n
  while (primes.length < num) {
    //if i passes prime test add it to the array
    if (isPrime(i)) {
      primes.push(i);
    }
    //increment in and add 1 to i
    i += 1;
  }
  return primes;
}

//funtion to handle form submit
function onSubmit(e) {
  e.preventDefault();
  const num = document.getElementById('number').value;
  const data = primesArray(num);
  const output = `
  <div class="output-primes">
  <p>${data}</p>
  </div>`;
  const display = document.getElementById('output-primes');
  display.innerHTML = output;
}

//adding event listener to submit button
document.getElementById('submit').addEventListener('click', onSubmit);
