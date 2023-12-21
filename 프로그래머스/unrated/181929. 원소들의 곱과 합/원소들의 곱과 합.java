class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int sup=1;
        int sum =0;
        for(int i=0;i<num_list.length;i++){
            sup *=num_list[i];
            sum += num_list[i];
        }
        
        return sup > sum*sum ? 0 :1; 
        
    }
}