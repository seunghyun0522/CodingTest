class Solution {
    public int solution(String t, String p) {

        int start =0;
        int end =p.length();
        int cnt=0;
        String  tmp;
        for(int i=start;i<t.length()-end+1;i++){
            tmp = t.substring(i,i+end);
            cnt += Long.parseLong(tmp) <= Long.parseLong(p) ? 1 :0;
   
        }

        
        return cnt;
    }
}