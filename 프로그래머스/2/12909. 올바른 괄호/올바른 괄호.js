function solution(s) {
  let stack = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") stack++;
    else stack--;
    if (stack < 0) return false;
  }
  return stack === 0 ?true :false;
}
