function solution(box, n) {
    var answer = 1;
    box.map((x)=>answer *= parseInt(x/n))
    return answer;
}