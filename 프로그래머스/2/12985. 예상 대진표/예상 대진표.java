class Solution
{
    public int solution(int n, int a, int b)
    {
        int answer = 0;
        if(a % 2== 1 ) a++;
        if(b % 2== 1 ) b++;

        int cnt=0;
        System.out.println(a + " " + b);
        if(a==b) return 1;
        while(a!=b){
        if(a % 2== 1 ) a++;
        if(b % 2== 1 ) b++;
            a/=2;
            b/=2;
            cnt++;
        }
        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        System.out.println(cnt);

        return cnt;
    }
}