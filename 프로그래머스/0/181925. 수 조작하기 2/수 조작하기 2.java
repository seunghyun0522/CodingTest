class Solution {
    public String solution(int[] numLog) {
               String answer = "";
        for(int i=0; i<numLog.length-1;i++){
            int cal = numLog[i+1] -numLog[i];
            if(cal == 1) answer+="w";
            else if(cal == -1) answer+='s';
            else if(cal == 10) answer+='d';
            else answer+='a';
        }
 
        return answer;
    }
}