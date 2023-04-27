function solution(my_string) {
    var answer = 0;
    const arr = [...my_string];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>='0' && arr[i]<='9') {
            answer += parseInt(arr[i]);
        }
    }
    return answer;
}