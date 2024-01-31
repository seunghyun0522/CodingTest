function solution(emergency) {
    let cnt;
    let result = [];
    for(let i=0; i<emergency.length;i++){
        cnt=0;
        for(let j=0; j<emergency.length;j++){
            if(emergency[i] <= emergency[j]) cnt++;
        }
        result.push(cnt);
    }
    return result;
}