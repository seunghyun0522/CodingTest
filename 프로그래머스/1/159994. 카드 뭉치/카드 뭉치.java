class Solution {
	public String solution(String[] cards1, String[] cards2, String[] goal) {
		int index1 = 0;
		int index2 = 0;

		for (String str : goal) {
			if (index1 < cards1.length && str.equals(cards1[index1]))
				index1++;
			else if (index2 < cards2.length && str.equals(cards2[index2]))
				index2++;
			else
				return "No";

		}
		return "Yes";
	}
}