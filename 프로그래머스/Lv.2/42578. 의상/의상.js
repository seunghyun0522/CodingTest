function solution(clothes) {
  let dir = {};
  let result = 1;
  clothes.forEach((v) => (dir[v[1]] = (dir[v[1]] || 0) + 1));

  for (let i in dir) {
    result *= dir[i] + 1;
  }
  return result - 1;
}