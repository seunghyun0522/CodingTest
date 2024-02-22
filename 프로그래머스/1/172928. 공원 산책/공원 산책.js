function solution(park, routes) {
  let maxRow = park.length - 1;
  let maxCol = park[0].length - 1;

  let row = park.findIndex((s) => s.includes("S"));
  let col = park[row].indexOf("S");


  routes.forEach((element) => {
    let [dir, count] = element.split(" ");
    let tempRow = row;
    let tempCol = col;
    let flag = true;

    while (count--) {
      if (dir === "N") tempRow--;
      else if (dir === "S") tempRow++;
      else if (dir === "E") tempCol++;
      else tempCol--;

      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempRow][tempCol] === "X"
      ) {
        flag = false;
        break;
      }
    }
  
    if (flag) {
      col = tempCol;
      row = tempRow;
    }
  });

  return [row,col];
}
