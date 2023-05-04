function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter((x)=>x%n===0);
    return answer;
}