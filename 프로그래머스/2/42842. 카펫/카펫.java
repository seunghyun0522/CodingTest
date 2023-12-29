class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int max=yellow;  
        int sum = brown+ yellow;
        int x=0, y=0;
        for(x=1;x<=yellow;x++){
            if(yellow % x ==0) {
                y = yellow /x;  
                if(x >=(yellow/x) && (brown + yellow) == (x+2)*(y+2)) {  
                    break;
         
                }
            } 
        }

     
        answer[0] = x+2;
        answer[1] = y+2;
        return answer;
    }
}