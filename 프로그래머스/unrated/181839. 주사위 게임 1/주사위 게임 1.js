function solution(a, b) {
    var answer = 0;
    let cnt =0;
    if(a%2!=0) cnt++;
    if(b%2!=0) cnt++;
    console.log(cnt);
    if(cnt==2) return a*a +b*b;
    if(cnt ==1) return 2*(a+b);
    if(cnt ==0 )return Math.abs(a-b);

}