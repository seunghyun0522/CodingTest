function solution(num, k) {
    var answer = 0;
    let result =  num.toString().split('');
    for(let i=0;i<result.length;i++){
        if(result[i]==k) return i+1;
    }
    return -1;
}