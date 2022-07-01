// regex

// k진수에서 소수 개수 구하기
function isPrime(x) {
  x = parseInt(x);
  if (x === 0 || x === 1) {
    return false;
  }
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
function isSatisfied(x, prime) {
  let regexs = [
    new RegExp(`0${x}0`, 'g'), // 0P0
    new RegExp(`${x}0`, 'g'), // P0
    new RegExp(`0${x}`, 'g'), // 0P
    new RegExp(`${x}`, 'g'), // P
  ];
  for (let re of regexs) {
    if (x.match(re)) {
      return true;
    }
  }
  return false;
}
function solution(n, k) {
  const x = n.toString(k);
  let primes = x.split(/0+/g);
  primes = primes.filter((prime) => prime !== ''); // 1100의 경우 split 할때 '11', '' 으로 나눠지는데, ''을 삭제
  primes = primes.filter((prime) => isPrime(prime)); // 소수만 남기기
  const ans = primes.filter((prime) => isSatisfied(x, prime)); // 조건에 맞는 소수 남기기

  return ans.length;
}
