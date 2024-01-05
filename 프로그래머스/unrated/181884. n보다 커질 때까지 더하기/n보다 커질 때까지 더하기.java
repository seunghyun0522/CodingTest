class Solution {
    public int solution(int[] numbers, int n) {
        int answer = 0;
        
       for(int value : numbers){
           if(answer > n) break;
           answer+= value;
       }
        return answer;
    }
}