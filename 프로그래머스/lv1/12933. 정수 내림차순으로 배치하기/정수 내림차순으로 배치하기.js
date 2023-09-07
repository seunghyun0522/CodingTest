function solution(n) {
    let answer = String(n);
    const mapfn = (arg)=>Number(arg);
    answer = Array.from(answer,mapfn);
    answer.sort((a,b)=>b-a);
    answer = answer.join('');
    answer = Number(answer);
    return answer;
}