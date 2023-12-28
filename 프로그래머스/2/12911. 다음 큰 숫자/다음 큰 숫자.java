class Solution {
    public int solution(int n) {
        int answer = 0;
        int cmp = n;
        String s1 = Integer.toBinaryString(n);
        int cnt1 = 0;
        int cnt2=0;
        for(int i=0; i<s1.length();i++){
            if(s1.charAt(i) == '1') cnt1++;
        }
        while(true){
            cmp++;
            cnt2=0;
            String s2 = Integer.toBinaryString(cmp);
            for(int i=0; i<s2.length();i++){
            if(s2.charAt(i) == '1') cnt2++;
        }
            if(cnt1 == cnt2) break;
           
        }
   
        return cmp;
    }
}