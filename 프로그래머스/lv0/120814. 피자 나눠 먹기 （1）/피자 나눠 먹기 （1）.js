function solution(n) {
    var answer = 0;
    answer = parseInt(n/7);
    if(n%7>0) answer++;
    return answer;
}

