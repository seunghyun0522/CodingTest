import java.util.*;
class Solution {
    public String solution(int[] food) {
        int len=0;
        
        String answer = "";
        for(int i=1;i<food.length;i++){
            if(food[i] >1) {len += (food[i]%2 ==0) ? food[i] : food[i]-1; }
      
        }
        len +=1;
        int[] ans = new int[len];
        
        ans[len/2] = 0;
       
        int cnt =1;
        int i=0;
        int j=len-1;

        while(cnt < food.length){
            if(food[cnt]%2!=0) food[cnt]--;

            while(food[cnt] > 0){
 
                ans[i] = cnt;
                ans[j] =cnt;
                i++;
                j--;
                food[cnt]-=2;
            }
            cnt++;
        }
        
        
        for(int value : ans){
            System.out.print(value);
        }
        return answer = Arrays.toString(ans).replaceAll("[^0-9]","");
    }
}