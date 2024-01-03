import java.util.*;

class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        Map<String, Integer> nameYearningMap = new HashMap<>();
        int nameLength = name.length;

        // 이름과 yearning 값을 해시맵에 매핑
        for (int i = 0; i < nameLength; i++) {
            nameYearningMap.put(name[i], yearning[i]);
        }

        int photoLength = photo.length;
        int[] answer = new int[photoLength];

        // 각 사진에 대해 이름 확인 및 yearning 값 누적
        for (int i = 0; i < photoLength; i++) {
            for (int j = 0; j < photo[i].length; j++) {
                String currentName = photo[i][j];
                if (nameYearningMap.containsKey(currentName)) {
                    answer[i] += nameYearningMap.get(currentName);
                }
            }
        }
        
        return answer;
    }
}
