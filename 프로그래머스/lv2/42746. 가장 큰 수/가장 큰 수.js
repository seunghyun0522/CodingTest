function solution(number) {
    var answer = '';

    number.sort(function (a, b) {
        // a,b 를 문자로 변환
        var a_str = a.toString();
        var b_str = b.toString();
        
        // 비교를 위해 더함 sum_str1 : 610, sum_str2 : 106
        var sum_str1 = a_str + b_str;
        var sum_str2 = b_str + a_str;

        // 문자열끼리 크기 변환이 가능
        
        if (sum_str1 > sum_str2) {
            // -1 을 변환해서 change
            return -1;
        } else if (sum_str1 == sum_str2) {
            return 0;
        } else {
            // 그대로
            return 1;
        }
    });
    
    for(let i=0; i<number.length;i++){
        answer += number[i];
    }
    
     if (parseInt(answer) === 0) {
        answer = "0";
    }
    
    return answer;
    
    

}


solution([0,0])
