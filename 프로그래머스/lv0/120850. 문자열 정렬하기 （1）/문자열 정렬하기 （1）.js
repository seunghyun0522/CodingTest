function solution(my_string) {
    var answer = [];
    answer = my_string.split("").map(Number).filter(x=>!isNaN(x)).sort((a,b)=>a-b);

    return answer;
}