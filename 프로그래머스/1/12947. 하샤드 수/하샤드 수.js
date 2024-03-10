function solution(x) {
    var answer = true;
    var copy = x;
    var result = 0;
    while(copy>0){
        result += copy%10;
        copy= Math.floor(copy/10);
    }
    if(x%result==0)return true;
    else return false;

}