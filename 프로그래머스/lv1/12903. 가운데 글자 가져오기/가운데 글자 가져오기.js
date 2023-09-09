function solution(s) {
    
    let arr = s.split('');
    let key = Math.floor(arr.length/2);

    if(arr.length % 2 ===0) return [arr[key-1],arr[key]].join('');
    else return arr[key];
    return arr;

}