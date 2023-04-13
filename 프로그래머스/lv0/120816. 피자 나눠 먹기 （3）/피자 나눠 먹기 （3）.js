function solution(slice, n) {
    var answer = 0;
    answer = parseInt(n/slice);
    if(n%slice >0 ) answer++;
    return answer;
}