function solution(cacheSize, cities) {
  let result = 0;
  let arr = [];

  if (cacheSize === 0) return cities.length * 5;
  while (cities.length) {
    let shift = cities.shift().toLowerCase();
    if (arr.includes(shift)) {
      result += 1;
      let idx = arr.indexOf(shift);
      arr.splice(idx, 1);
      arr.push(shift);
    } else {
      if (arr.length === cacheSize) arr.shift();
      arr.push(shift);

      result += 5;
    }
  }

  return result;
}