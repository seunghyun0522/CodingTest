
class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()];
        char[] ch = new char[s.length()];
        for(int i=0;i<answer.length;i++){
            ch[i] = s.charAt(i);
        }
        
        int i,j;
        
        for(i=0;i<ch.length;i++){
            int max=0;
            int cnt=0;
            for(j=0;j<i;j++){
                if(ch[i] == ch[j]){
                        if(j > max) max = j;
                    cnt++;
                }
            }
            if(cnt <=0) answer[i] = -1;
            else answer[i] = i-max;

        }
        return answer;
    }   
}