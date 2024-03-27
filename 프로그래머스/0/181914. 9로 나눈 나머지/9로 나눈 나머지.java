class Solution {
    public int solution(String number) {
        String[] answer = number.split("");
        int sum =0;
        for(int i=0; i<answer.length;i++){
            sum+= Integer.parseInt(answer[i]);
        }
        return sum%9;
    }
}