class Solution {
    public int solution(int a, int b, int c) {
        
        int cnt=0;
        
        if(a==b) cnt++;
        if(b==c) cnt++;
        if(a==c) cnt++;
        
        if(cnt == 0) return a+b+c;
        else if(cnt ==1) return (a+b+c) * (a*a + b*b +c*c);
        else return (a+b+c) *(a*a+b*b+c*c) *(a*a*a+b*b*b+c*c*c);
    
    }
}