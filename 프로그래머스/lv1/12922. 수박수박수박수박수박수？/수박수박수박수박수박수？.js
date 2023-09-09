function solution(n) {
    let answer="";
    var su = "수";
    var bak = "박";
    for(let i =0;i<n;i++){
        i%2===0 ? answer += su : answer +=bak;
    }
    return answer;
}