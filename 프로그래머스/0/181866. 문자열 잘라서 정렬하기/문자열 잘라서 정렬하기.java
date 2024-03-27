import java.util.*;
class Solution {
    public String[] solution(String myString) {
        
        String[] answer = myString.split("x");
        ArrayList<String> resultList = new ArrayList<>();
        Arrays.sort(answer);
        
        for(int i=0; i<answer.length;i++){
            if(!answer[i].isEmpty()) resultList.add(answer[i]);
        }
         
        String[] resultArr = resultList.toArray(new String[resultList.size()]);
        Arrays.sort(resultArr);
        return resultArr;
    }
}