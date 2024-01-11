function solution(want, number, discount) {
  const windowSize = 10;
  let count = 0;
  let remainingNumbers = [...number];
  let wantCount = want.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  // 초기 창구의 상태를 계산
  for (let i = 0; i < windowSize; i++) {
    const item = discount[i];
    if (item in wantCount) {
      remainingNumbers[want.indexOf(item)]--;
    }
  }

  // 초기 창구에서 가능한 경우 카운트 증가
  if (remainingNumbers.every(num => num <= 0)) {
    count++;
  }

  // 슬라이딩 윈도우를 적용하여 창구의 상태를 업데이트하면서 카운트 증가
  for (let end = windowSize; end < discount.length; end++) {
    const newItem = discount[end];
    const oldItem = discount[end - windowSize];

    if (newItem in wantCount) {
      remainingNumbers[want.indexOf(newItem)]--;
    }
    if (oldItem in wantCount) {
      remainingNumbers[want.indexOf(oldItem)]++;
    }

    // 현재 창구에서 가능한 경우 카운트 증가
    if (remainingNumbers.every(num => num <= 0)) {
      count++;
    }
  }

  return count;
}
