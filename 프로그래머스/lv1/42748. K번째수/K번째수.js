// swap function
function swapFunction(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//Bubble Sort!
function Bubblesort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swapFunction(array, j, j + 1);
      }
    }
  }
}

// Insertion Sort!
function InsertionSort(array) {
  var currentVal;
  for (var i = 1; i < array.length; i++) {
    currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
}

// Selection Sort!
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swapFunction(arr, i, min);
  }
  return arr;
}
function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1;
    let end = commands[i][1];
    // slice 를 통해 새로운 배열에 저장시킨다.
    let tmp_array = array.slice(start, end);
    // console.log(tmp_array);
    /*-------------------------------------------*/
    //use Bubble Sort!
    Bubblesort(tmp_array);
    /*-------------------------------------------*/
    //use Insertion Sort!
    InsertionSort(tmp_array);
    /*-------------------------------------------*/
    //use Selection Sort!
    selectionSort(tmp_array);
    /*-------------------------------------------*/
    //  console.log(tmp_array);
    answer.push(tmp_array[commands[i][2] - 1]);
  }
  return answer;
}

