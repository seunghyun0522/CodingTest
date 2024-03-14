function solution(s) {
  let strList = s.replace("{{", "").replace("}}", "").split("},{");
  let setList = [];

  strList.forEach((element) => {
    setList.push(element.split(",").map(Number));
  });

  setList.sort((a, b) => {
    if (a.length > b.length) return 1;
    else return -1;
  });

  let check = [];
  check.push(setList[0][0]);

  for (let i = 0; i < setList.length; i++) {
    for (let j = 0; j < setList[i].length; j++) {
      if (!check.includes(setList[i][j])) check.push(setList[i][j]);
    }
  }

  return check;
}