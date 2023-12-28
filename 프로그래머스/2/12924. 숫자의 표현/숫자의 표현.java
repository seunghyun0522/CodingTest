class Solution {
    public int solution(int n) {
        int cnt=0;
        for(int i=n;i>=1;i--){
            int sum=0;
            for(int j=i; j>=1;j--){
                sum+=j;
                
                if(sum >= n) break;
            }
            if(sum == n) cnt++;
        }
   
        return cnt;
    }
}