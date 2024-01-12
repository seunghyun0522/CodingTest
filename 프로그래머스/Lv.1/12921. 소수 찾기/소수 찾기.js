function solution(n) {
  let count = 0;
  let a = [];
  for (let i = 2; i <= n; i++) {
    a[i] = i;
  }
  for (let i = 2; i <= n; i++) {
    if (a[i] === 0) continue;
    for (let j = i + i; j <= n; j += i) {
      a[j] = 0;
    }
  }
  for (let i = 2; i <= n; i++) {
    if (a[i] !== 0) count++;
  }
  return count;
}