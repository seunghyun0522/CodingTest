import java.util.ArrayList;
class Solution {
    public int[] solution(String[] intStrs, int k, int s, int l) {
        ArrayList<Integer> integers = new ArrayList<Integer>(); 
        int cnt=0;
        for(int i=0; i<intStrs.length;i++){
            int value = Integer.parseInt(intStrs[i].substring(s,s+l));
            if( value > k) integers.add(value);
        }
        int[] answer = new int[integers.size()];
        int size=0;
        for(int temp : integers){
            answer[size++] = temp;
        }
        return answer;
    }
}