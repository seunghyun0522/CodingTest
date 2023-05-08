function solution(array) {
    var answer = [];
    
    let max = Math.max(...array);
    answer.push(max);
    for(let i=0; i<array.length;i++ ){
        if(max === array[i]) answer.push(i);
    }

    return answer;
}