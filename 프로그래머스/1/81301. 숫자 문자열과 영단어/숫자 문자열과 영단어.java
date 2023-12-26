class Solution {
    public int solution(String s) {
    
        String[] str = {"zero","one","two","three","four","five","six","seven","eight","nine"};
        
        for(int i=0;i<str.length;i++){
            if(s.contains(str[i])) {
                s = s.replace(str[i],Integer.toString(i));
            }
        }
        return Integer.parseInt(s);
    }
}