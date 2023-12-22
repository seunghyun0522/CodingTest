class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int [num_list.length-5];
     
        
        for(int j=0; j<num_list.length;j++){
            for(int i=0;i<num_list.length-1;i++){
            if(num_list[i] > num_list[i+1]){
                int tmp = num_list[i+1];
                num_list[i+1] = num_list[i];
                num_list[i] = tmp;
            }
            }
        }
        
        for(int i=0;i<answer.length;i++){
            answer[i]= num_list[i+5];        }
        return answer;
    }
}