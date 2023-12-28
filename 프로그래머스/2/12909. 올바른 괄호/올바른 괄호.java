import java.util.*;
class Solution {
    boolean solution(String s) {
        //stack 할당
        Stack<Integer> stack = new Stack<>();
        
        //문자열의 길이에 따른 stack
        for(int i=0;i<s.length();i++){
            //'(' 일때 push
            if(s.charAt(i)=='(') stack.push(i);
            //스택이 비어있는 경우 , 닫는 괄호를 입력 받았으나 pop할 원소가 없음
            else if(stack.empty()) return false;
            //그 외의 경우 stack 원소들을 pop
            else stack.pop();
        }

        
        //모든 것이 완료돼서 empty일 경우
        if(stack.empty())return true;
        else return false;
 
    }
}