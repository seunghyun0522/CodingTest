import java.util.HashSet;
import java.util.Set;

class Solution {
	public int solution(int[] elements) {
		int sum = 0;
		int start = 1;
		Set<Integer> set = new HashSet<Integer>();
		while (start <= elements.length) {

			for (int i = 0; i < elements.length; i++) {
				sum = 0;
				for (int j = i; j < i + start; j++) {
					sum += elements[j % elements.length];
				}
				set.add(sum);
			}
			start++;
		}

		return set.size();
	}
}
