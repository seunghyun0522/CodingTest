function solution(s, target) {
  let result = 0;

  dfs(0, 0);
  function dfs(index, sum) {
    if (index === s.length) {
      if (target === sum) {
        result++;
        return;
      }
    } else {
      dfs(index + 1, sum + s[index]);
      dfs(index + 1, sum - s[index]);
    }
  }
  console.log(result);
  return result;
}

solution([4, 1, 2, 1], 4);
