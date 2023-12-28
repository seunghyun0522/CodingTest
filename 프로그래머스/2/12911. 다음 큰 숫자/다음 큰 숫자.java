public class Solution {
    public int solution(int n) {
        int cnt1 = countOnes(n);
        int cmp = n + 1;
        int cnt2;
        
        while (true) {
            cnt2 = countOnes(cmp);
            if (cnt1 == cnt2) {
                break;
            }
            cmp++;
        }
        
        return cmp;
    }
    
    private int countOnes(int num) {
        int count = 0;
        String binary = Integer.toBinaryString(num);
        
        for (int i = 0; i < binary.length(); i++) {
            if (binary.charAt(i) == '1') {
                count++;
            }
        }
        
        return count;
    }
}
