function solution(my_string, letter) {
  let answer = "";

  answer = [...my_string].filter((words) => words !== letter).join("");

  return answer;
}