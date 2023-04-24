function solution(array) {
    var answer = 0;
   
    return array.sort((a,b)=>a-b)[Math.floor(array.length/2)];
}