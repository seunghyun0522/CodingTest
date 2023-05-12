function solution(s) {
    let answer =[];
    let a =s.split(" ").map(Number);
    let max = Math.max(...a);
    let min = Math.min(...a);
        answer.push(min);
    answer.push(max);

    return answer.join(" ");
}