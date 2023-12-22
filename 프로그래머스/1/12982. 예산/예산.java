import java.util.Arrays;

class Solution {
    public int solution(int[] d, int budget) {

        int max=0;
        int sum=0;
        int answer=0;
        int i;
        int cnt =1;
        Arrays.sort(d);
        
        for(int j=0;j<d.length;j++){
            sum =0;
           
        for( i = d.length-cnt;i>=0;i--){
            sum += d[i];
            if(budget < sum) break;
            max ++;
        }
            if(answer < max) answer = max;
            max =0;
            cnt++;
        }
        return answer;
    }
}