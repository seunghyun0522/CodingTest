function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  let start = 0;
  let end = m;
    
  while (end <= score.length) {
    let arr = score.slice(start, end);
    start = start + m;
    end = end + m;

    let pop = arr.pop();
    let result = pop * m;

    answer += result;

  }
  return answer;
}