class Solution {
    public String solution(String my_string, int m, int c) {
        String answer = "";
        
        String arr[] = new String[my_string.length()/ m];
        
        int start = 0;
        int end =m;
        for(int i=0; i<arr.length;i++){
            arr[i] = my_string.substring(start,end);
            start = end;
            end +=m;
            answer +=arr[i].charAt(c-1);

        }

        return answer;
    }
}