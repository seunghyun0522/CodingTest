class Solution {
    public int solution(int n) {
        String result= "\n";
        while(n>0){
            result += n%3;
            n= n/3;
        }
        System.out.println(result);
        int sum=0;
        int sup = 1;
        for(int i=result.length()-1; i> 0;i--){
            char ch= result.charAt(i);
            int ch1 = (int) ch %48;
            sum += sup * ch1;
            sup*=3;
        
  
            
        }
        return sum;
        
    }
}