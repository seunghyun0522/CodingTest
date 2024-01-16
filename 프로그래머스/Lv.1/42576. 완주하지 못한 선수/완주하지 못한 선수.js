
function solution(participant, completion) {
  var answer = "";
  let dic = {};

  participant.forEach((element) => {
    dic[element] = (dic[element] || 0) + 1;
  });

  completion.forEach((element) => {
    if (dic[element]) {
      dic[element] -= 1;
    }
  });

  for (let key of Object.keys(dic)) {
    if (dic[key] > 0) {
      return key;
    }
  }
}