class Solution {
    public String solution(String s) {
        String answer = "";
        s= s.toLowerCase();
        
        char[] str = new char[s.length()];
        for(int i=0;i<str.length;i++){
            str[i] = s.charAt(i);
        }
        for(int i=0;i<str.length-1;i++){
            if(str[i]==' ' && (str[i+1]>='a' && str[i+1]<='z')) 
                str[i+1] = (char)(str[i+1]-32);
        }
        
        for(int i=0;i<str.length;i++){
            if(i==0 && (str[i]>='a' && str[i]<='z')) 
                str[i] = (char)(str[i]-32);
        }
        
        for(int i=0;i<str.length;i++){
            answer+= str[i];
        }
  
        return answer;
    }
}