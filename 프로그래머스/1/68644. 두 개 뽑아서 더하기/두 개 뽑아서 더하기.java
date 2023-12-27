import java.util.*;
class Solution {
    public int[] solution(int[] numbers) {
      Arrays.sort(numbers);
        LinkedList<Integer> list1 = new LinkedList<>();
        for (int i = numbers.length - 1; i >= 0; i--) {
            for (int j = i - 1; j >= 0; j--) {
                int sum = numbers[i] + numbers[j];
                if (!list1.contains(sum)) list1.push(sum);
            }
        }

        
     // Convert LinkedList to int array
        int[] result = new int[list1.size()];
        int index = 0;
        for (int num : list1) {
            result[index++] = num;
        }
Arrays.sort(result);
        return result;
    }
}