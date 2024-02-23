function solution(n, m, section) {
  var cnt = 0;
  while (section.length > 0) {
    start = section[0];
    for (let val = start; val < start + m; val++) {
      if (val === section[0])  section.shift();
    }
    cnt++;
  }
  return cnt;
}
