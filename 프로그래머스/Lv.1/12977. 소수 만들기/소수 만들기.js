function solution(nums) {
  var answer = -1;

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let num = nums[i] + nums[j] + nums[k];
        if (prime(num)) count++;
      }
    }
  }

  return count;
}

function prime(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}