function solution(a, b) {
    var answer = 0;
    if(a>b){
        start = b;
        end = a;
    }
    else{
        start =a;
        end= b;
    }
    for(let i=start;i<=end;i++){
        answer+=i;
    }
    return answer;
}