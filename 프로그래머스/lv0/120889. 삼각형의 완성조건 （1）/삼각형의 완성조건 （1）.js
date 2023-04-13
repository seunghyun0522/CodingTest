function solution(sides) {
    var answer = 0;
    let max =0;
    let max_index;
    let total = 0;
    for(let i=0;i<sides.length;i++){
        if(sides[i]>max){
            max = sides[i];
            max_index = i;
        }
    }

    for(let i = 0; i<sides.length;i++){
        if(max_index!=i){
            total = sides[i] + total;

        }
    }

    if(total > max) return 1
    else return 2
    return answer;
}