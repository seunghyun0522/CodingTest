class Solution {
    public int[] solution(int n) {
        int[][] answer = new int[n][n];
        int v =0;
        int x =-1;
        int y =0;
        int num = n;
        int cnt=0;
        while(n > 0){
            for(int i=0; i<n;i++){
                if(x+1 > num) break;
                x++;
                v++;
                answer[x][y] = v;
            }
            n--;
         
            for(int i=0; i<n;i++){
                if(y+1 >num) break;
                v++;
                y++;
                answer[x][y] = v;
      
              
            }
            n--;
            for(int i=0; i<n;i++){
                if(x+1 >num || y+1>num) break;
                x--;
                y--;
                v++;
                answer[x][y] = v;

            }
            n--;
        }

        int[] ans = new int[v];
        int val = 0;
        for(int i=0; i<num;i++){
            for(int j=0; j<num;j++){
                if(answer[i][j] !=0) {
                    ans[val] = answer[i][j];
                    val++;
                }
            }
        }
        return ans;
    }
}