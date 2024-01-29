function solution(n, left, right) {
  let arr = [];

  for (let i = left; i <= right; i++) {
    let a = parseInt(i / n);
    let b = parseInt(i % n);

    arr.push(a > b ? a + 1 : b + 1);
  }
  return arr;
}