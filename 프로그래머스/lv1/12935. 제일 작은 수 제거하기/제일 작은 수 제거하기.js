function solution(arr) {
    
    let min = Math.min(...arr);
    let result =arr.filter(x=>x!==min);
    if(result.length <1) return [-1];
    else return result;

}
