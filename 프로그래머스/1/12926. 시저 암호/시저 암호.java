class Solution {
    public String solution(String s, int n) {
        String answer = "";
        
        for(int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            
            // 대문자인 경우
            if(ch >= 'A' && ch <= 'Z') {
                ch = (char)('A' + (ch - 'A' + n) % 26); // 순환하여 처리하기 위해 모듈로 연산 사용
            } 
            // 소문자인 경우
            else if(ch >= 'a' && ch <= 'z') {
                ch = (char)('a' + (ch - 'a' + n) % 26); // 순환하여 처리하기 위해 모듈로 연산 사용
            }
            
            answer += ch;
        }
        
        return answer;
    }
}