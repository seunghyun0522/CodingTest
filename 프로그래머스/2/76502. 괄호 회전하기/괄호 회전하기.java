import java.util.Stack;
class Solution {
	public int solution(String s) {

		int count = 0;
		char data = 0;
		for (int cnt = 0; cnt < s.length(); cnt++) {
			Stack<Character> stack = new Stack<Character>();
			for (int i = 0; i < s.length(); i++) {
				data = s.charAt((i + cnt) % s.length());
				if (stack.isEmpty()) {

					stack.push(data);
				} else if (stack.peek() == '[' && data == ']') {
					stack.pop();
				} else if (stack.peek() == '(' && data == ')') {
					stack.pop();
				} else if (stack.peek() == '{' && data == '}') {
					stack.pop();
				} else
					stack.push(data);

			}

			if (stack.empty())
				count++;

		}

		return count;
	}
}