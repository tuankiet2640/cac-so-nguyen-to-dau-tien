var a = [];

let n = prompt("nhap N");
for (let j = 1; j < n; j++) {
  if (isPrime(j)) {
    a.push(j);
  }
}
for (let p in a) {
  document.writeln(a[p]);
}

console.log(a[1]);
function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
