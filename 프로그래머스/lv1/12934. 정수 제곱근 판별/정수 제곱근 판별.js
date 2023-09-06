function solution(n) {
    var sub=0;
    for(let i =1; i<=n;i++){
        if(i*i === n) {
            sub = i+1;
            return sub*sub;}
    }
    return -1;
}