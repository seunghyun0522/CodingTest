function solution(my_string) {
    var answer = '';
    let i,j;
    for(i=0;i<my_string.length;i++){
        for(j=0;j<=i;j++){
            if(my_string[i]===my_string[j]) break;
        }
        if(i===j) answer+= my_string[i];
    }
    return answer;
}