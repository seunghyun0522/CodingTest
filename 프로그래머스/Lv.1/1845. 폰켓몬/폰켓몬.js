function solution(nums) {
  let len1 = nums.length / 2;

  const set = new Set(nums);
  const arr = [...set];
  len2 = arr.length;

  let answer = len1 > len2 ? len2 : len1;

  return answer;
}