class Solution {
    public int[] solution(int[] num_list) {
        
        int result [] =new int [num_list.length+1];
        
        for(int i=0; i<num_list.length;i++){
            result[i]= num_list[i];
}
        
        int a =num_list[num_list.length-1];
        int b= num_list[num_list.length-2] ;
        int last =  a>b ?  a-b : a*2;
        
        result[result.length-1] = last;
        return result;
    }
}