class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int total = brown + yellow;
        
        for (int x = 1; x <= yellow; x++) {
            if (yellow % x == 0) {
                int y = yellow / x;
                if (x >= y && total == (x + 2) * (y + 2)) {
                    answer[0] = x + 2;
                    answer[1] = y + 2;
                    break;
                }
            }
        }

        return answer;
    }
}
