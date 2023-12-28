class Solution {
    public int[] solution(String s) {
        int len1 =0; 
        int len2=0;
        String str=s;
        
        int cnt=0;
        int sum=0;
        
        while(!str.equals("1")){
        len1=0;
        len2=0;

        for(int i=0; i<str.length();i++){
            if(str.charAt(i)=='1') len1++;
        }
        len2 = str.length()-len1;
            sum+=len2;
        str = str.replace(str,Integer.toBinaryString(len1));
            cnt++;
        }
  
        int[] answer = {cnt,sum};
        return answer;
    }
}