function solution(left, right) {
    var answer = 0;
    for(let i = left; i<=right;i++){
       let length_div = divisorLength(i);
        length_div % 2 ===0 ? answer +=i : answer-=i;
    }
    return answer;
}

function divisorLength(x){
    let cnt=0;
    for(let i =1;i<=x;i++){
        if(x%i===0) cnt++;
    }
    console.log(x,cnt);
    return cnt;
}