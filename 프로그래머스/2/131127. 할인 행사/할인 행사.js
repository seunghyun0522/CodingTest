function solution(want, number, discount) {
  let start = 0;
  let end = 10;
  let cnt = 0;

  while (end <= discount.length) {
    let tmp = [...number];

    for (let i = 0; i < want.length; i++) {
      for (let j = start; j < end; j++) {
        if (want[i] === discount[j]) {
          tmp[i]--;
        }
      }
    }

    let flag = true;
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] > 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      cnt++;
    }

    start++;
    end++;
  }

  return cnt;
}
