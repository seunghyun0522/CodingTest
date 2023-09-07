
function solution(n) {
    //n을 문자열로 바꾸기
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}