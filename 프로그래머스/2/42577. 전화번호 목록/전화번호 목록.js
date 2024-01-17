function solution(phone_book) {
  let has = {};
  for (let value of phone_book) {
    has[value] = true;
  }

  for (let value of phone_book) {

    for (let i = 1; i < value.length; i++) {
      let pre = value.slice(0, i);
      if (has[pre]) return false;
    }
  }
  return true;
}