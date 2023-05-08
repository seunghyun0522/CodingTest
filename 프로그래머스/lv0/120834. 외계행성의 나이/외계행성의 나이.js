function solution(age) {
    var answer = '';
    
    return answer=age
        .toString()
        .split('')
        .map((x)=>String.fromCharCode(97+parseInt(x)))
        .join("");
}