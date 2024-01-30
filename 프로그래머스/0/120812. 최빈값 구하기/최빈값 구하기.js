function solution(array) {
    var answer = 0;
    
    let table = {};
    let max = 0;
    let max_index=0;
    array.forEach(element => table[element] = (table[element] || 0) + 1);

    for (let key in table) {
        if (table[key] > max) {
            max_index =key;
            max = table[key];
        }
    }

    console.log(max,max_index);
    
    let cnt=0;
    for(let key in table){
        if(max === table[key]) cnt++;
    }
    if(cnt > 1) return -1;
    else return Number(max_index);
}


