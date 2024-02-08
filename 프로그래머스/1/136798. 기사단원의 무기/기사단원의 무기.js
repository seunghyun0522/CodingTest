function solution(number, limit, power) {
  var answer = 0;

  var arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(divisor(i));
  }
  console.log(arr);
  const arr1 = arr.map((x) => {
    return x > limit ? power : x;
  });
  console.log(arr1);

  let sum = 0;
  arr1.forEach((element) => {
    sum += element;
  });
  return sum;
}

function divisor(number) {
  let cnt = 1;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) cnt++;
  }
  return cnt;
}