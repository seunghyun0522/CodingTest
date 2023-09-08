function solution(arr, divisor) {
 
    let key = arr.filter(x=>x%divisor===0).sort((a,b)=>a-b);
    
    if ( key.length < 1) return [-1];
    else return key;

}