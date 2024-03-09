function solution(arr) {
    var answer = arr.reduce((acc,cur,idx)=> {return acc+=cur},0);
    answer /= arr.length;
    return answer;
}