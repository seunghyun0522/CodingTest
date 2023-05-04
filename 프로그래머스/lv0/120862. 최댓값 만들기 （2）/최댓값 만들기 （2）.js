function solution(numbers) {
    var answer = 0;
    let max=-111111111111;
    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<i;j++){
            if(numbers[i]*numbers[j] > max)  max =  numbers[i]*numbers[j];
        }
    }
    return answer=max;
}