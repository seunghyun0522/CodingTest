
class Solution {
	public int solution(int a, int b) {
		int answer = 0;
		
		int r1 = Integer.parseInt( a+""+b);
		int r2 = 2*a*b;
		return r1 > r2 ? r1 : r2;
	}
}