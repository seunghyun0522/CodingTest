function solution(progresses, speeds) {
  var answer = [];

  let arr = progresses.map((x, y) => Math.ceil((100 - x) / speeds[y]));


  let cnt = 1;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer.push(cnt);
      max = arr[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  answer.push(cnt);

  return answer;
}