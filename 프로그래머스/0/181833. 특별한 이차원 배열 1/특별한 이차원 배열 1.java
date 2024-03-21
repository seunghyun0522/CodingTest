class Solution {
    public int[][] solution(int n) {
        int[][] answer = new int[n][n];
        
        int cnt =0;
        for(int i=0; i<n;i++){
            for(int j=0; j<n;j++){
                if(i==cnt && j==cnt) 
                {
                    answer[i][j] = 1;
                    cnt++;
                }
            }
        }
        return answer;
    }
}