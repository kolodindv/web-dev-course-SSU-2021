let factorialMass = [1n, 1n]
  for (let i = 2n; i <= 200n; i++){
    factorialMass[i] = factorialMass[i - 1n] * i;
  }

const toBinom = (n) => {
  if (!Number.isInteger(n) || n < -200 || n > 200) {
    return 'Invalid input';
  }

  let result = '';
  let isPositive = true;

  if (n < 0) {
    isPositive = false;
    n = Math.abs(n);
  }

  if (n == 0) {
    result = '1'
  } else {
    {
      for (let i = 0; i <= n; i++) {
        let c = factorialMass[BigInt(n)] / (factorialMass[BigInt(n - i)] * factorialMass[BigInt(n) - BigInt(n - i)]);
        (c == 1) ? c = "" : result += c.toString();

        if (n - i == 1) {
          result += 'a';
        }
        if (n - i > 1) {
          result += 'a^' + (n - i);
        }
        if (i == 1) {
          result += 'b';
        }
        if (i > 1) {
          result += 'b^' + (i);
        }
        if (i != n) {
          result += '+';
        }
      }
    }
  }

  return isPositive ? result : '1/(' + result + ')';
}

console.log("Формула бинома Ньютона для n: ")
console.log(toBinom(0));
console.log(toBinom(1));
console.log(toBinom(2));
console.log(toBinom(-2));
console.log(toBinom(3));
console.log(toBinom(5));
console.log(toBinom(201));
console.log(toBinom(3.14));
console.log(toBinom(200));