function solution(numbers, target) {
  var answer = 0;

  let a = new TargetNum(numbers, target, answer);
  a.dfs(0, 0);
  console.log(a.answer);
  return a.answer;
}

class TargetNum {
  constructor(numbers, target, answer) {
    this.numbers = numbers;
    this.target = target;
    this.answer = answer;
  }
  dfs(index, sum) {
    if (index === this.numbers.length) {
      if (this.target === sum) this.answer++;
      return;
    }
    this.dfs(index + 1, sum + this.numbers[index]);
    this.dfs(index + 1, sum - this.numbers[index]);
  }
}
