function solution(num) {
    let cnt = 0;
    if(num===1) return 0;
    while(cnt<=500){
        if(num%2 ===0)  num/=2;
        else num = num*3 +1;
        cnt++;
        if(num ===1) return cnt;
    }
    return -1;
}

console.log(solution(1));