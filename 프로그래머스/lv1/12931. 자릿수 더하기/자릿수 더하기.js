function solution(n)
{
    var answer = n.toString().split("").map(Number).reduce((acc,cur,idx)=>{return acc+=cur},0);

    return answer;
}