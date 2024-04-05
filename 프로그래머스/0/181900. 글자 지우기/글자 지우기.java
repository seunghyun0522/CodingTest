import java.util.*;

class Solution {
    public String solution(String my_string, int[] indices) {
        String answer="";
        int arr[] = new int[my_string.length()];
        Arrays.fill(arr, 0);
        
        for(int i=0; i<indices.length;i++){
            arr[indices[i]] =1;
        }
        
        for(int i=0; i<my_string.length();i++){
            if(arr[i] ==0) answer+=my_string.charAt(i);
        }
        return answer;
    }
}