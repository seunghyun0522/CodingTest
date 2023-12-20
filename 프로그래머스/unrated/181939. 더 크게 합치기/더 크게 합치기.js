function solution(a, b) {
        let answer1 =  parseInt(String(a)+String(b));
        let answer2 =   parseInt(String(b)+String(a));
        
       return answer1 > answer2 ?  answer1 :  answer2;
}