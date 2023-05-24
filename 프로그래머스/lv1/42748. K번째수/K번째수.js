function swapFunction(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function Bubblesort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapFunction(array, j, j + 1);
      }
    }
  }
}

function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1;
    let end = commands[i][1];
    let tmp_array = array.slice(start, end);
    // console.log(tmp_array);
    Bubblesort(tmp_array);
    //  console.log(tmp_array);
    answer.push(tmp_array[commands[i][2] - 1]);
  }
  return answer;
}