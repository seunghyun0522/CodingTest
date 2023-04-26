function solution(n) {
    var answer = 0;
    const str = String(n);
    const mapfn = (arg)=>Number(arg);
    const newArr = Array.from(str,mapfn);
    
    newArr.map((x)=>answer+=x);
    return answer;
}